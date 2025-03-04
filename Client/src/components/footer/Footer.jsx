import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import AdminHours from "../admin/AdminHours";

export default function Footer() {
  // The Footer component is a functional component that renders the footer section of the website.
  return (
    <footer className="footer">
      {" "}
      {/* The footer element has a class name of "footer". */}
      <div className="footer-logo">
        <img
          src="https://www.elevatesportsgarage.com/_next/image?url=%2Flogo.png&w=256&q=75"
          alt="esg logo"
        />
      </div>
      {/* The footer contains a logo element. */}
      <div className="footer-details">
        {" "}
        {/* The footer contains a details section with address and contact information. */}
        <p>
          Contact Us
          <br></br>
          📍 1270 Sattler Road
          <br></br>
          🗺️ New Braunfels, Texas 78132
        </p>{" "}
        {/* The address information is displayed in a paragraph element. */}
        <p>
          {" "}
          📧 info@elevatesportsgarage.com
          <br></br>
          📞 (830) 964-6078
        </p>{" "}
        {/* The contact information is displayed in a paragraph element. */}
      </div>
      <div className="footer-hours">
        Hours
        <AdminHours />
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
