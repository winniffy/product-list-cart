import './Cart.css';

const ConfirmCart = ({item, clearItem, products}) => {

    const itemTotalAmount = `$${(item.quantity * item.price).toFixed(2)}`;

    const dessertImg = products.map((productImg) => productImg.image.thumbnail);

    // card image background style 
    const dessertCardImage = {
        backgroundImage: `url(${dessertImg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100px',
    }

  return (
    <div className='confirm-cart_item-container'>
        <div className='desserts_img-thumbnail' style={dessertCardImage}>
        </div>
        <p className='cart_item-name'>{item.name}</p>
        <p className="cart_item-price">{`$${item.price.toFixed(2)}`}</p>
        <p>{item.quantity}</p>
        <p>{itemTotalAmount}</p>
    </div>
  )
}

export default ConfirmCart