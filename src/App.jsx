import { useEffect, useReducer } from 'react';
import './variables.css';
import Products from './data.json';
import Desserts from './components/Desserts';
import Cart from './components/Cart';
import { motion } from "framer-motion";

// reducer
function reducer(state, action) {
  switch (action.type) {

    // add item to cart
    case "add":
      // check if item exists
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return state.map((item) => 
          item.id === action.payload.id ? {...item, quantity: item.quantity + 1} : item
        )
      } else {
        return [...state, {...action.payload, quantity: 1}];
      };

    // remove item from cart
    case "remove":
      return state.map((item) =>
        item.id === action.payload.id ? {...item, quantity: item.quantity - 1} : item
      )
      .filter((item) => item.quantity > 0);

    // clear all items of a dessert from cart
    case "clear":
      return state.map((item) =>
        item.id === action.payload.id ? {...item, quantity: item.quantity > 1 ? item.quantity = 0 : '' } : item
      )
      .filter((item) => item.quantity > 0);
    
    // reset cart/app
    case "reset":
      return [];

    default:
      return state;
  }
}

// initial cart state from local storage
function initialCartState() {
  const existingCart = localStorage.getItem('cartItems');
  return existingCart ? JSON.parse(existingCart) : [];
};


function App() {

  const [cartItems, dispatch] = useReducer(reducer, [], initialCartState);

  function addToCart (dessert) {
    dispatch({type: "add", payload: dessert})
  };

  function removeItem (dessertID) {
    dispatch({type: "remove", payload: {id: dessertID}})
  };

  function clearItem (dessertID) {
    dispatch({type: "clear", payload: {id: dessertID}})
  };

  function resetApp () {
    dispatch({type: "reset"});
    localStorage.removeItem('cartItems');
  };

  // cart total
  const totalAmount = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0);

  // save current cart to localStorage when cart changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);


  return (
    <>
    {/* container */}
      <motion.div
        className='container'
        initial={{ y: -100, opacity: 0.5}}
        animate={{ y: 0, opacity: 1}}
        transition={{ type: "spring", stiffness: 100 }}
      >

        {/* left section */}
        <section className="left_container">
          <Desserts products={Products} addToCart={addToCart} cartItems={cartItems} removeItem={removeItem} />
        </section>

        {/* right section */}
        <section className="right_container">
          <Cart cartItems={cartItems} clearItem={clearItem} totalAmount={totalAmount} resetApp={resetApp} />
        </section>
        
      </motion.div>
    </>
  )
}

export default App
