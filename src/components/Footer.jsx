import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img
          src="https://www.booktime.org/images/Logo_en.svg"
          alt="Booktime Logo"
          className="footer-logo-img"
        />
      </div>

      <ul className="footer-menu">
        <li>Home</li>
        <li>About</li>
        <li>Books</li>
        <li>Contact</li>
      </ul>

      <div className="footer-social">
        <a href="#">
          <FaTwitter />
        </a>
        <a href="#">
          <FaFacebookF />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} All rights reserved | Made with| by
        BookTime
      </p>
    </footer>
  );
}
