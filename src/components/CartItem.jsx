import removeIcon from '/images/icon-remove-item.svg';
import './Cart.css';

const CartItem = ({item, clearItem}) => {

    const itemTotalAmount = `$${(item.quantity * item.price).toFixed(2)}`;

  return (
    <div className='cart_item-container'>
      <article className="cart_item-container_left">
        <p className='cart_item-name'>{item.name}</p>
        <span className="cart_item-container_left-inner">
          <p className='cart_item-quantity cart_font-size'>{`${item.quantity}x`}</p>
          <p className="cart_item-price cart_font-size">{`@ $${item.price.toFixed(2)}`}</p>
          <p className='cart_item-total cart_font-size'>{itemTotalAmount}</p>
        </span>

      </article>

      <button className='cart_item-remove_btn' onClick={() => clearItem(item.id)}>
          <img src={removeIcon} alt="remove item icon" />
          {/* <TiDeleteOutline /> */}
          {/* <FaTimes /> */}
      </button>
    </div>
  )
}

export default CartItem