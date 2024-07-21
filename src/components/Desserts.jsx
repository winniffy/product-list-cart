import './Desserts.css'

const Desserts = ({products}) => {
  return (
    <div className="desserts_container">
        <h1 className='desserts_header'>Desserts</h1>
        <article className="desserts_grid-container">
            {
                // check if products exist and then map through products array from json file
                products && products.map((dessert => {
                    return (
                    <aside className='desserts_card'>
                        <img src={dessert.image.desktop} alt={`${dessert.name} image`} />
                        <p key={dessert.id}>{dessert.name}</p>
                    </aside>
                    )
                }))
            }
        </article>
    </div>
  )
}

export default Desserts