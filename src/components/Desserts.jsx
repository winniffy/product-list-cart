import './Desserts.css'
import cart from '/images/icon-add-to-cart.svg'



const Desserts = ({products}) => {

  return (
    <div className="desserts_container">
        <h1 className='desserts_header'>Desserts</h1>
        <article className="desserts_grid-container">
            {
                // check if products exist and then map through products array from json file
                products && products.map((dessert => {

                    // card image background style 
                    const dessertCardImage = {
                        backgroundImage: `url(${dessert.image.desktop})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        height: '250px',
                    }

                    return (
                    <aside className='desserts_card' key={dessert.id}>
                        {/* <img className='desserts_img' src={dessert.image.desktop} alt={`${dessert.name} image`} /> */}
                        <div className='desserts_img' style={dessertCardImage}>
                            {/* add to cart button */}
                            <button className="desserts_add-btn">
                                <img src={cart} alt="cart icon" className="cart_icon" />
                                <p className="cart_text">Add to Cart</p>
                            </button>
                        </div>

                        
                        {/* dessert card sub text */}
                        <p className="dessert_category">{dessert.category}</p>
                        <p className='dessert_name'>{dessert.name}</p>
                        <p className="dessert_price">{`$${dessert.price}`}</p>
                    </aside>
                    )
                }))
            }
        </article>
    </div>
  )
}

export default Desserts