import React from "react";

import { useNavigate } from "react-router-dom";

const QuickContactButton = ({ label }) => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate("/contact");
  };

  return (
    <button className="quick-contact-button" onClick={handleContact}>
      {label || "Contact Us"}
    </button>
  );
};

export default QuickContactButton;
