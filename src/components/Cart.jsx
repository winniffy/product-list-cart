import CartItem from "./CartItem"
import emptyIllustration from "/images/illustration-empty-cart.svg"
import carbonNeutralIcon from "/images/icon-carbon-neutral.svg";
import './Cart.css';
import Confirmation from "./Confirmation";
import { useState } from "react";

const Cart = ({cartItems, clearItem, totalAmount}) => {

    const [showConfirm, setShowConfirm] = useState(false);

    function toggleConfirmationModal() {
        setShowConfirm(!showConfirm)
    }

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
                    // console.log(cartItems)
                    return (
                        <CartItem key={item.id} item={item} clearItem={clearItem} />
                    )
                })
            )
        }

        {
            cartItems.length === 0 ? '' : (
                <>
                    <h2>{`$${totalAmount.toFixed(2)}`}</h2>

                    <article className="carbon_neutral">
                        <img src={carbonNeutralIcon} alt="carbon neutral icon" />
                        <p className="carbon_text">This is a carbon-neutral delivery</p>
                    </article>

                    <button className="confirm_btn" onClick={toggleConfirmationModal} >
                        Confirm Order
                    </button>

        
                    { showConfirm && (
                        <Confirmation cartItems={cartItems} toggleConfirmationModal={toggleConfirmationModal} />
                    ) } 
                </>
        
            )

        }

    </div>
  )
}

export default Cart