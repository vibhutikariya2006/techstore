import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaCcPaypal,
  FaCcVisa,
  FaCcMastercard,
  FaCcDiscover,
  FaCcAmex,
} from "react-icons/fa";

import "./Footer.css";
import paypal from "../../../assets/paypal-logo.webp"
import visa from "../../../assets/visa-logo.svg"
import mastercard from "../../../assets/Mastercard-logo.png"
import discover from "../../../assets/discover-logo.png"
import americanexpress from "../../../assets/american-express-logo.png"

const Footer = () => {
  return (
    <footer className="footer">

      {/* Newsletter Section */}
      <div className="newsletter">
        <div className="newsletter-content">
          <h2>Sign Up To Our Newsletter.</h2>
          <p>Be the first to hear about the latest offers.</p>
        </div>

        <div className="newsletter-form">
          <input
            type="email"
            placeholder="Your Email"
          />
          <button>Subscribe</button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="footer-columns">

        {/* Information */}
        <div className="footer-column">
          <h4>Information</h4>

          <a href="#">About Us</a>
          <a href="#">About Zip</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Search</a>
          <a href="#">Terms</a>
          <a href="#">Orders and Returns</a>
          <a href="#">Contact Us</a>
          <a href="#">Advanced Search</a>
          <a href="#">Newsletter Subscription</a>
        </div>

        {/* PC Parts */}
        <div className="footer-column">
          <h4>PC Parts</h4>

          <a href="#">CPUS</a>
          <a href="#">Add On Cards</a>
          <a href="#">Hard Drives (internal)</a>
          <a href="#">Graphic Cards</a>
          <a href="#">Keyboards / Mice</a>
          <a href="#">Cases / Power Supplies / Cooling</a>
          <a href="#">RAM (Memory)</a>
          <a href="#">Software</a>
          <a href="#">Speakers / Headsets</a>
          <a href="#">Motherboards</a>
        </div>

        {/* Desktop PCs */}
        <div className="footer-column">
          <h4>Desktop PCs</h4>

          <a href="#">Custom PCs</a>
          <a href="#">Servers</a>
          <a href="#">MSI All-In-One PCs</a>
          <a href="#">HP/Compaq PCs</a>
          <a href="#">ASUS PCs</a>
          <a href="#">Tecs PCs</a>
        </div>

        {/* Laptops */}
        <div className="footer-column">
          <h4>Laptops</h4>

          <a href="#">Everyday Use Notebooks</a>
          <a href="#">MSI Workstation Series</a>
          <a href="#">MSI Prestige Series</a>
          <a href="#">Tablets and Pads</a>
          <a href="#">Notebooks</a>
          <a href="#">Infinity Gaming Notebooks</a>
        </div>

        {/* Address */}
        <div className="footer-column address-column">
          <h4>Address</h4>

          <p>
            Address: 1234 Street Address City Address, 1234
          </p>

          <p>
            Phones: <span>(00) 1234 5678</span>
          </p>

          <p>
            We are open: Monday-Thursday: 9:00 AM - 5:30 PM
            <br />
            Friday: 9:00 AM - 4:00 PM
            <br />
            Saturday: 11:00 AM - 5:00 PM
          </p>

          <p>
            E-mail: <span>shop@email.com</span>
          </p>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">

        {/* Social Icons */}
        <div className="social-icons">
          <a href="#">
           <i className="ri-facebook-box-fill"></i>
          </a>

          <a href="#">
            <i className="ri-instagram-fill"></i>
          </a>
        </div>

        {/* Payment Icons */}
        <div className="payment-icons">
          <img src={paypal} alt="" id="paypalimg"/>
          <img src={visa} alt=""id="paypalimg" />
          <img src={mastercard} alt="" id="mastercardimg"/>
          <img src={discover} alt="" id="discoverimg" />
          <img src={americanexpress} alt="" id="americanexpressimg" />
        
        </div>

        {/* Copyright */}
        <p className="copyright">
          Copyright © 2020 Shop Pty. Ltd.
        </p>

      </div>

    </footer>
  );
};

export default Footer;