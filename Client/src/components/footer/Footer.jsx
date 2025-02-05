import React from "react";
import "./Footer.css";

export default function Footer() {
  // The Footer component is a functional component that renders the footer section of the website.
  return (
    <footer className="footer">
      {" "}
      {/* The footer element has a class name of "footer". */}
      <div className="footer-logo">{/* logo plzzzz */}</div>{" "}
      {/* The footer contains a logo element. */}
      <div className="footer-details">
        {" "}
        {/* The footer contains a details section with address and contact information. */}
        <p>1234 garage , somewhere in texas, TX 1234567 </p>{" "}
        {/* The address information is displayed in a paragraph element. */}
        <p> email: email here | phone: (123) 456-7890</p>{" "}
        {/* The contact information is displayed in a paragraph element. */}
      </div>
      <div className="footer-social">
        {" "}
        {/* The footer contains a social media section with links to Facebook, Instagram, and Twitter. */}
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
          {" "}
          {/* The footer contains a rights section with copyright information. */}
          <p>© date here Elevate Sports Garage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
