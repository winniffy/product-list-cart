import './Cart.css';

const ConfirmCart = ({item, products}) => {

    const itemTotalAmount = `$${(item.quantity * item.price).toFixed(2)}`;

    const productID = products.find((product) => product.id === item.id);

    const dessertImg = productID ? productID.image.thumbnail : '';

    // console.log(dessertImg)

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
        <div className='desserts_img-thumbnail' style={dessertCardImage}></div>
        <article className='confirm-cart_inner-flex' >
            <p className='confirm-cart_item-name'>{item.name}</p>
            <aside className='confirm-cart_inner-flex_bottom' >
                <p className="confirm-cart_item-price">{`$${item.price.toFixed(2)}`}</p>
                <p>{item.quantity}</p>
            </aside>
        </article>
        <p>{itemTotalAmount}</p>
    </div>
  )
}

export default ConfirmCart