import './Desserts.css';
import cartIcon from '/images/icon-add-to-cart.svg';
// import decreaseIcon from '/images/icon-decrement-quantity.svg';
// import increaseIcon from '/images/icon-increment-quantity.svg';

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

  return (
    <aside className='desserts_card' key={dessert.id}>
        <div className='desserts_img' style={{...dessertCardImage, ...checkIfItemExists ? dessertBorder : ''}}>
            {/* add to cart button */}
            { checkIfItemExists ?
            (<div className="desserts_add-btn inc_btn">
                <box-icon name='minus' onClick={() => removeItem(dessert.id)}></box-icon>
                <box-icon name='plus' onClick={() => addToCart(dessert)} ></box-icon>
                {/* <button onClick={() => removeItem(dessert.id)} > <img src={decreaseIcon} alt="decrease" /> </button>
                <button onClick={() => addToCart(dessert)} > <img src={increaseIcon} alt="increase" /> </button> */}
            </div>)
            : (
                // <div className="desserts_img">
                <button className="desserts_add-btn" onClick={() => addToCart(dessert)}>
                    <img src={cartIcon} alt="cart icon" className="cart_icon" />
                    <p className="cart_text">Add to Cart</p>
                </button>
                // </div>
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