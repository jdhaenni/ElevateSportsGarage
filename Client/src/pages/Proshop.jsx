import React from 'react'
import './Proshop.css'

const products = [
  {
    id: 1,
    name: 'Baseball bats',
    price: 80,
    image: (
      <img
        src='https://www.elevatesportsgarage.com/_next/image?url=%2Fbaseball-bat.png&w=256&q=75'
        alt='baseball bat'
      />
    )
  },
  {
    id: 2,
    name: 'Batting Gloves',
    price: 50,
    image: (
      <img
        src='https://www.elevatesportsgarage.com/_next/image?url=%2Fbatting-gloves.png&w=256&q=75'
        alt='batting gloves'
      />
    )
  },
  {
    id: 3,
    name: 'ESG t-shirt',
    price: 40,
    image: (
      <img
        src='https://www.elevatesportsgarage.com/_next/image?url=%2Fesg-t-shirt.png&w=256&q=75'
        alt='esg t-shirt'
      />
    )
  },
  {
    id: 4,
    name: 'Baseball/Softball 3-pack',
    price: 25,
    image: (
      <img
        src='https://www.elevatesportsgarage.com/_next/image?url=%2Fbaseball-softball-3-pack.png&w=256&q=75'
        alt='baseball/softball 3-pack'
      />
    )
  }
]

export default function Proshop () {
  return (
    <div>
      <h1 className='proshop-header'>
        Welcome to the Elevate Sports Garage Proshop!
      </h1>
      <p className='proshop-subtitle'>
        Where you can find the best equipment for your game!
      </p>
      <div className='products-container'>
        {products.map(product => (
          <div key={product.id} className='product'>
            <h2>{product.image}</h2>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)} className='add-to-cart'>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
