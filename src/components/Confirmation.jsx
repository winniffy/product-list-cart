import ConfirmCart from './ConfirmCart';
import './Confirmation.css';
import confirmedIcon from '/images/icon-order-confirmed.svg';

import products from '../data.json';


const Confirmation = ({cartItems, toggleConfirmationModal, resetApp}) => {

    function resetAll() {
        toggleConfirmationModal();
        resetApp();
    }
    
  return (
    <section className='confirm_overlay'>
        <div className="confirm_box">
            <img src={confirmedIcon} alt="confirmed icon" />
            <h2>Order Confirmed</h2>
            <p>We hope you enjoy your food!</p>
        <div className="confirm_cart-bg">
            { cartItems.map((item) =>
                <ConfirmCart key={item.id} item={item} products={products} />
                )
            }
        </div>
        <button onClick={resetAll} >
            Start New Order
        </button>
        </div>
    </section>
  )
}

export default Confirmation