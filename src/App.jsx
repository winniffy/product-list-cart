import { useEffect, useReducer } from 'react';
import './variables.css';
import Products from './data.json';
import Desserts from './components/Desserts';
import Cart from './components/Cart';

// reducer
function reducer(state, action) {
  switch (action.type) {

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

    case "remove":
      return state.map((item) =>
        item.id === action.payload.id ? {...item, quantity: item.quantity - 1} : item
      )
      .filter((item) => item.quantity > 0);

      case "clear":
        return state.map((item) =>
          item.id === action.payload.id ? {...item, quantity: item.quantity > 1 ? item.quantity = 0 : '' } : item
        )
        .filter((item) => item.quantity > 0);

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
      <div className='container'>

        {/* left section */}
        <section className="left_container">
          <Desserts products={Products} addToCart={addToCart} cartItems={cartItems} removeItem={removeItem} />
        </section>

        {/* right section */}
        <section className="right_container">
          <Cart cartItems={cartItems} clearItem={clearItem} totalAmount={totalAmount} />
        </section>
        
      </div>
    </>
  )
}

export default App
