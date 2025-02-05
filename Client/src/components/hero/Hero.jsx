import React from "react";
import BookingButton from "../booking/BookingButton";
import QuickContactButton from "../contact/QuickContactButton";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Elevate Sports Garage</h1>
        <p>Your one-stop shop for all your sports needs</p>
        <button className="hero-button">Book Now</button>

        <div className="hero-buttons">
          <BookingButton label="Book Now" />
          <QuickContactButton label="Contact Us" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
