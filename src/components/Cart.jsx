import CartItem from "./CartItem"
import emptyIllustration from "/images/illustration-empty-cart.svg"
import './Cart.css';

const Cart = ({cartItems, removeItem, totalAmount}) => {
  return (
    <div>
        <h2>Your Cart ({cartItems.length})</h2>
        {
            cartItems.length === 0 ? (
                <>
                    <img src={emptyIllustration} alt="empty illustration image" />
                    <p>Your added items will appear here</p>
                </>
            ) : (
                cartItems.map((item) => {
                    console.log(cartItems)
                    return (
                        <CartItem key={item.id} item={item} removeItem={removeItem} />
                    )
                })
            )
        }

        <h2>{`$${totalAmount.toFixed(2)}`}</h2>
    </div>
  )
}

export default Cart