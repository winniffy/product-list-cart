import ConfirmCart from './ConfirmCart';
import './Confirmation.css';
import confirmedIcon from '/images/icon-order-confirmed.svg';

import products from '../data.json';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react';


const Confirmation = ({cartItems, toggleConfirmationModal, resetApp, totalAmount, showConfirm}) => {
    
    const [isAnimate, setIsAnimate] = useState(showConfirm);
    const [showOverlay, setShowOverlay] = useState(true);

    function resetAll() {
        toggleConfirmationModal();
        resetApp();
    }

    function toggleAnimate() {
        setIsAnimate(!isAnimate);
        // console.log(isAnimate)
    }
    
return (
    <AnimatePresence mode='wait'>
        {isAnimate && (
            <motion.section 
                className='confirm_overlay'
                key='modal1'
                onClick={toggleAnimate}
                initial={{opacity: 1}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                // transition={{duration: 0.1, delay: 0}}
                onAnimationEnd={() => {if(!isAnimate) setShowOverlay(!showOverlay)}}
            >
                <motion.div
                    className="confirm_box"
                    key='modal2'
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ type: "spring", stiffness: 100 }}
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
                    <button className='confirm_start-btn' onClick={resetAll}>
                        Start New Order
                    </button>
                </motion.div>
        </motion.section>)}
    </AnimatePresence>
)
}

export default Confirmation