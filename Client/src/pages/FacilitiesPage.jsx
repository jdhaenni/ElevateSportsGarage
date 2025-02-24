import React from 'react'
import './FacilitiesPage.css'

export default function Facilities () {
  return (
    <div className='proshop-page'>
      <div className='content-container'>
        <div className='image-section'>
          <img
            src='https://media.istockphoto.com/id/1314882259/photo/strong-baseball.jpg?s=612x612&w=0&k=20&c=Um_nVEvk1jfdP0OduFhVRVH8JCtYa0CVAA9h89m15ZY='
            alt='batting cage photo'
          />
          <p className='image-description'>
            At our facility, we use the Hack Attack Baseball Pitching Machines
            that have a unique three-wheel design that lets you see the ball
            clearly and fully all the way through the feeding motion,
            acceleration and release, just like a live pitcher
          </p>
        </div>
        <div className='message-section'>
          <h1 className='welcome-message'>Welcome to our Facilities!</h1>
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
          <h2 className='product-title'>Featured Products</h2>
          <p>Check out some of the brands we carry!</p>
          <div className='brand-links'>
            <img src='' alt='Taterballs Image' />
            <a href='https://www.taterbaseball.com' className='taterballs'>
              Taterballs
            </a>
            <img src='' alt='Naked Grips image' />
            <a href='https://www.nakedgrips.com' className='naked-grips'>
              Naked Grips
            </a>
            <img src='' alt='Lizard Skin image' />
            <a href='https://www.lizardskins.com' className='lizard-skin'>
              Lizard Skin
            </a>
          </div>
          <a href='link-to-shop' className='shop-link'>
            SHOP NOW!
          </a>
        </div>
      </div>
    </div>
  )
}
