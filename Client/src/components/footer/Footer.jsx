import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">{/* logo plzzzz */}</div>
      <div className="footer-details">
        <p>1234 garage , somewhere in texas, TX 1234567 </p>
        <p> email: email here | phone: (123) 456-7890</p>
      </div>
      <div className="footer-social">
        <a href="LINK HERE">
          <i className="facebook"> Facebook</i>
        </a>
        <a href="LINK HERE">
          <i className="instagram"> Instagram</i>
        </a>
        <a href="LINK HERE">
          <i className="twitter"> Twitter</i>
        </a>
        <div className="footer-rights">
          <p>© date here Elevate Sports Garage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
