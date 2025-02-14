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
    <div className='proshop-page'>
      <div className='content-container'>
        <div className='image-section'>
          <img
            src='https://media.istockphoto.com/id/1314882259/photo/strong-baseball.jpg?s=612x612&w=0&k=20&c=Um_nVEvk1jfdP0OduFhVRVH8JCtYa0CVAA9h89m15ZY='
            alt='batting cage photo'
          />
        </div>
        <div className='message-section'>
          <h1>Welcome to the Pro Shop!</h1>
          <p>
            Welcome to Elevate Sports Garage, your premier destination for
            indoor baseball and softball training.
            <br />
            Our state-of-the-art facility is designed to provide athletes of all
            ages and skill levels with the perfect environment to hone their
            skills. We offer high-quality batting cages equipped with the latest
            technology to track performance and improve batting techniques. Our
            experienced staff is dedicated to helping you elevate your game,
            whether you're a beginner looking to learn the basics or an advanced
            player aiming for the next level.
            <br />
            Join us and experience the excitement of training in a safe,
            controlled environment, rain or shine. Let's swing for success
            together!
          </p>
        </div>
        <div className='featured-product'>
          <h2>Featured Product</h2>
          <p>Check out our signature Elevate Sports Garage Batting Gloves!</p>
          <img
            className='batting-gloves'
            src='https://vafloc02.s3.amazonaws.com/isyn/images/f614/img-4308614-m.jpg'
            alt='batting gloves'
          />
          <a href='link-to-shop' className='shop-link'>
            Shop Now!
          </a>
        </div>
      </div>
    </div>
  )
}
