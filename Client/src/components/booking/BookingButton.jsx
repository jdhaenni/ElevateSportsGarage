import React from "react";

import { useNavigate } from "react-router-dom";

const BookingButton = ({ label }) => {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/booking");
  };

  return (
    <button className="booking-button" onClick={handleBooking}>
      {label || "Book a Cage Now"}
    </button>
  );
};

export default BookingButton;
