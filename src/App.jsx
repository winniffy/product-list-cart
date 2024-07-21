import { useState } from 'react'
import './variables.css'
import Products from './data.json'
import Desserts from './components/Desserts'

function App() {

  return (
    <>
    {/* container */}
      <div className='container'>

        {/* left section */}
        <section className="left_container">
          <Desserts products={Products} />
        </section>

        {/* right section */}
        <section className="right_container">

        </section>
        
      </div>
    </>
  )
}

export default App
