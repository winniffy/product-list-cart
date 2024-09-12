import CartItem from "./CartItem"
import emptyIllustration from "/images/illustration-empty-cart.svg"
import carbonNeutralIcon from "/images/icon-carbon-neutral.svg";
import './Cart.css';
import Confirmation from "./Confirmation";
import { useEffect, useState } from "react";

const Cart = ({cartItems, clearItem, totalAmount, resetApp}) => {

    // confirmation modal state
    const [showConfirm, setShowConfirm] = useState(false);

    // confirmation modal function
    function toggleConfirmationModal() {
        setShowConfirm(prevState => !prevState)
        // console.log(showConfirm)
    }

  return (
    <div className="cart_container">
        <h2 className="cart_container-header">Your Cart ({cartItems.length})</h2>
        
        {/* show empty cart illustration */}
        {
            cartItems.length === 0 ? (
                <article className="cart_container-empty">
                    <img src={emptyIllustration} alt="empty illustration image" />
                    <p className="cart_container-empty_text">Your added items will appear here</p>
                </article>
            ) : (

                // show cart items
                cartItems.map((item) => {
                    return (
                        <CartItem key={item.id} item={item} clearItem={clearItem} />
                    )
                })
            )
        }

        {
            cartItems.length === 0 ? '' : (
                <>
                    <span className="total_flex">
                        <p className="total_text">Order Total</p>
                        <h2 className="total_amount">{`$${totalAmount.toFixed(2)}`}</h2>
                    </span>

                    <article className="carbon_neutral">
                        <img src={carbonNeutralIcon} alt="carbon neutral icon" />
                        <p className="carbon_text">This is a <span className="carbon_text-bold">carbon-neutral</span> delivery </p>
                    </article>

                    <button className="confirm_btn" onClick={toggleConfirmationModal} >
                        Confirm Order
                    </button>

        
                    { showConfirm && (
                        <Confirmation cartItems={cartItems} toggleConfirmationModal={toggleConfirmationModal} resetApp={resetApp} totalAmount={totalAmount} showConfirm={showConfirm} />
                    ) } 
                </>
        
            )

        }

    </div>
  )
}

export default Cart