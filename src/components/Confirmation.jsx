import ConfirmCart from './ConfirmCart';
import './Confirmation.css';

import products from '../data.json';


const Confirmation = ({cartItems, toggleConfirmationModal, resetApp}) => {

    function resetAll() {
        toggleConfirmationModal();
        resetApp();
    }
    
  return (
    <section className='confirm_overlay'>
        <div className="confirm_box">
            <h2>Order Confirmed</h2>
            <p>We hope you enjoy your food!</p>
        { cartItems.map((item) =>
            <ConfirmCart key={item.id} item={item} products={products} />
            )
        }
        <button onClick={resetAll} >
            Start New Order
        </button>
        </div>
    </section>
  )
}

export default Confirmation