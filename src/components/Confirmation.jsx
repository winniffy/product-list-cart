import ConfirmCart from './ConfirmCart';
import './Confirmation.css';
import confirmedIcon from '/images/icon-order-confirmed.svg';

import products from '../data.json';
import { motion, AnimatePresence } from "framer-motion";


const Confirmation = ({cartItems, toggleConfirmationModal, resetApp, totalAmount, showConfirm}) => {

    function resetAll() {
        toggleConfirmationModal();
        resetApp();
    }

    console.log(showConfirm)
    
return (
    <section 
    className='confirm_overlay'
    onClick={toggleConfirmationModal}
    
    >
        <AnimatePresence mode='wait'>
            {showConfirm && (
            <motion.div
                className="confirm_box"
                key='modal'
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ type: "spring", stiffness: 100 }}
                onClick={(e) => e.stopPropagation()}
            >
                <img src={confirmedIcon} alt="confirmed icon" className='confirm_icon' />
                <h2 className='confirm_header'>Order Confirmed</h2>
                <p className='confirm_subtext'>We hope you enjoy your food!</p>
            <div className="confirm_cart-bg">
                { cartItems.map((item) =>
                    <ConfirmCart key={item.id} item={item} products={products} totalAmount={totalAmount} />
                    )
                }
                <span className="confirm-total_flex">
                    <p className="confirm-total_text">Order Total</p>
                    <h2 className="confirm-total_amount">{`$${totalAmount.toFixed(2)}`}</h2>
                </span>
            </div>
            <button className='confirm_start-btn' onClick={resetAll} >
                Start New Order
            </button>
            </motion.div>)}
        </AnimatePresence>
    </section>
)
}

export default Confirmation