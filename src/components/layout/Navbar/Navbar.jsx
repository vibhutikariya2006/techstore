import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../../assets/logo.png";
import logo1 from "../../../assets/logo1.png";
import image from "../../../assets/image.png";

const Navbar = () => {
  const navLinks = [
    "Laptops",
    "Desktop PCs",
    "Networking Devices",
    "Printers & Scanners",
    "PC Parts",
    "All Other Products",
    "Repairs",
  ];
  const cartItems = useSelector((state) => state.cart.cart);

const totalItems = cartItems.reduce(
  (total, item) => total + item.quantity,
  0
);

  return (
    <>
      {/* ================= TOP BAR ================= */}

      <div className="topbar">

        <div className="top-left">

          <span>
            Mon-Thu :
            <strong>9:00 AM - 5:30 PM</strong>

            <i className="ri-arrow-down-s-line down-icon"></i>

          </span>

        </div>

        <div className="top-center">

          Visit our showroom in 1234 Street Address City Address, 1234

          <span className="contact-link">
            Contact Us
          </span>

        </div>

        <div className="top-right">

          <span>
            Call Us: (00) 1234 5678
          </span>

          <i className="ri-facebook-fill social"></i>

          <i className="ri-instagram-line social"></i>

        </div>

      </div>

      {/* ================= DESKTOP NAVBAR ================= */}

      <nav className="desktop-navbar">

        {/* Logo */}

        <div className="logo">

          <img
            src={logo}
            alt="Logo"
          />

        </div>

        {/* Navigation */}

        <ul className="nav-links">

          {navLinks.map((item, index) => (

            <li key={index}>
              {item}
            </li>

          ))}

        </ul>

        {/* Right Side */}

        <div className="nav-right">

          <Link to={"/catalog"}>
          <i className="ri-search-line"></i>
          </Link>

       <div className="cart">
  <Link to="/cart">
    <i className="ri-shopping-cart-line"></i>
  </Link>

  <span className="badge">
    {totalItems}
  </span>


</div>
          <Link to="/login">
  <i className="ri-user-3-fill"></i>
  </Link>


   
        </div>

      </nav>

      {/* ================= TABLET ================= */}

      <div className="tablet-navbar">

        <div className="tablet-top">

          <div className="tablet-contact">

            Mon-Thu :

            <strong>
              9:00 AM - 5:30 PM
            </strong>

          </div>

          <div className="tablet-contact2">

            Contact Us

          </div>

        </div>

        <div className="tablet-bottom">

          <i className="ri-menu-line menu-icon"></i>

          <div className="logo">

            <img
              src={logo}
              alt="Logo"
            />

          </div>

          <div className="tablet-search">

            <i className="ri-search-line"></i>

            <input
              type="text"
              placeholder="Search entire store here..."
            />

          </div>

          <div className="tablet-icons">

            <div className="cart">

                <Link to="/cart">
    <i className="ri-shopping-cart-line"></i>
  </Link>

  <span className="badge">
    {totalItems}
  </span>

            </div>

        <Link to="/login">
  <i className="ri-user-3-fill"></i>
  </Link>

          </div>

        </div>

      </div>
            {/* ================= MOBILE ================= */}

      <div className="mobile-navbar">

        {/* Mobile Top */}

        <div className="mobile-top">

          <div className="mobile-time">

            <span>
              Mon-Thu :
              <strong> 9:00 AM - 5:30 PM</strong>
            </span>

            <i className="ri-arrow-down-s-line"></i>

          </div>

          <div className="mobile-call">
            Call Us : (00) 1234 5678
          </div>

        </div>

        {/* Mobile Middle */}

        <div className="mobile-middle">

          <i className="ri-menu-line menu-icon"></i>

          <div className="logo">
            <img
              src={logo1}
              alt="Logo"
            />
          </div>

          <button className="deal-btn">
            Our Deals
          </button>

          <div className="cart">

            <Link to="/cart">
    <i className="ri-shopping-cart-line"></i>
  </Link>

  <span className="badge">
    {totalItems}
  </span>

          </div>

          <i className="ri-user-3-line user"></i>

        </div>

        {/* Mobile Search */}

        <div className="mobile-search">

          <i className="ri-search-line"></i>

          <input
            type="text"
            placeholder="Search entire store here..."
          />

        </div>

      </div>

    </>
  );
};

export default Navbar;