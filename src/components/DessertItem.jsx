import './Desserts.css';
import cartIcon from '/images/icon-add-to-cart.svg';
import { FaMinus, FaPlus } from "react-icons/fa";

const DessertItem = ({dessert, addToCart, cartItems, removeItem}) => {

    // card image background style 
    const dessertCardImage = {
        backgroundImage: `url(${dessert.image.desktop})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '250px',
    }

    const dessertBorder = {
        border: '2px solid var(--red)'
    }

    const checkIfItemExists = cartItems.some((item) => item.id === dessert.id);

    const itemQuantity = cartItems.map((item) => {
        if(item.id === dessert.id) return item.quantity;
    })

  return (
    <aside className='desserts_card' key={dessert.id}>
        <div className='desserts_img' style={{...dessertCardImage, ...checkIfItemExists ? dessertBorder : ''}}>
            {/* add to cart button */}
            { checkIfItemExists ?
            (<div className="desserts_add-btn inc_btn">

                <button className="cart_btn remove_btn" onClick={() => removeItem(dessert.id)}>
                    <FaMinus className='icon' />
                </button>

                <p className="item_quantity">{itemQuantity}</p>

                <button className="cart_btn add_btn" onClick={() => addToCart(dessert)}>
                    <FaPlus className='icon' />
                </button>
            </div>)
            : (
                <button className="desserts_add-btn" onClick={() => addToCart(dessert)}>
                    <img src={cartIcon} alt="cart icon" className="cart_icon" />
                    <p className="cart_text">Add to Cart</p>
                </button>

                )
            }
        </div>
        
        {/* dessert card sub text */}
        <p className="dessert_category">{dessert.category}</p>
        <p className='dessert_name'>{dessert.name}</p>
        <p className="dessert_price">{`$${dessert.price.toFixed(2)}`}</p>
    </aside>
  )
}

export default DessertItem