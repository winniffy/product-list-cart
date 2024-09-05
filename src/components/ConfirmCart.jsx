import './Confirmation.css';


const ConfirmCart = ({item, products}) => {

    const itemTotalAmount = `$${(item.quantity * item.price).toFixed(2)}`;

    const productID = products.find((product) => product.id === item.id);

    const dessertImg = productID ? productID.image.thumbnail : '';

    // card image background style 
    const dessertCardImage = {
        backgroundImage: `url(${dessertImg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '50px',
    }

  return (
    <div className='confirm-cart_item-container'>
        <div className="confirm-cart_item-left">   
            <div className='desserts_img-thumbnail' style={dessertCardImage}></div>
            <article className='confirm-cart_inner-flex'>
                <p className='confirm-cart_item-name confirm_font-size'>{item.name}</p>
                <aside className='confirm-cart_inner-flex_bottom' >
                    <p className='confirm-cart_item-quantity confirm_font-size'>{item.quantity}x</p>
                    <p className="confirm-cart_item-price confirm_font-size">{`@ $${item.price.toFixed(2)}`}</p>
                </aside>
            </article>
        </div>
        <p className='confirm-cart_item-total confirm_font-size'>{itemTotalAmount}</p>
    </div>
)
}

export default ConfirmCart