import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

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
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebookF} size="2x" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>

        {/* The footer contains a rights section with copyright information. */}
        <p>© date here Elevate Sports Garage. All rights reserved.</p>
      </div>
    </footer>
  );
}
