import { useState } from 'react'
import './App.css'
import Products from './data.json'
// import pic from './assets/images/image-creme-brulee-desktop.jpg'

function App() {

  return (
    <>
        <h1>Vite + React</h1>
        {
          Products && Products.map((product => {
            return (
              // console.log(product.image.desktop)
              <div>
                <img src={product.image.desktop} alt={`${product.name} image`} />
                <p key={product.id}>{product.name}</p>
              </div>
            )
          }))
        }
    </>
  )
}

export default App
