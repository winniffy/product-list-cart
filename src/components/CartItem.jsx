import removeIcon from '/images/icon-remove-item.svg';
import './Cart.css';


const CartItem = ({item, removeItem}) => {

    const itemTotalAmount = `$${(item.quantity * item.price).toFixed(2)}`;

  return (
    <div className='cart_item-container'>
        <p className='cart_item-name'>{item.name}</p>
        <p className="cart_item-price">{`$${item.price.toFixed(2)}`}</p>
        <p>{item.quantity}</p>
        <p>{itemTotalAmount}</p>
        <button onClick={(item) => removeItem(item.id)}>
            <img src={removeIcon} alt="remove item icon" />
        </button>
    </div>
  )
}

export default CartItem