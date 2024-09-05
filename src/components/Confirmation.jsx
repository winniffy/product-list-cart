import ConfirmCart from './ConfirmCart';
import './Confirmation.css';
import confirmedIcon from '/images/icon-order-confirmed.svg';

import products from '../data.json';


const Confirmation = ({cartItems, toggleConfirmationModal, resetApp, totalAmount}) => {

    function resetAll() {
        toggleConfirmationModal();
        resetApp();
    }
    
  return (
    <section className='confirm_overlay'>
        <div className="confirm_box">
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
        </div>
    </section>
  )
}

export default Confirmation