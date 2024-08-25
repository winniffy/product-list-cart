import DessertItem from './DessertItem'
import './Desserts.css'
import 'boxicons'


const Desserts = ({products, addToCart, cartItems, removeItem}) => {

  return (
    <div className="desserts_container">
        <h1 className='desserts_header'>Desserts</h1>
        <article className="desserts_grid-container">
            {
                // check if products exist and then map through products array from json file
                products && products.map((dessert => {
                    return (
                        <DessertItem key={dessert.id} dessert={dessert} addToCart={addToCart} cartItems={cartItems} removeItem={removeItem}/>
                    )
                }))
            }
        </article>
    </div>
  )
}

export default Desserts