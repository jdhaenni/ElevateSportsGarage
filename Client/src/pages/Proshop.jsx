import React from 'react'
import './Proshop.css'

const products = [
  {
    id: 1,
    name: 'Baseball bats',
    price: 80
  },
  {
    id: 2,
    name: 'Batting Gloves',
    price: 50
  },
  {
    id: 3,
    name: 'ESG t-shirt',
    price: 40
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
          </div>
        ))}
      </div>
    </div>
  )
}
