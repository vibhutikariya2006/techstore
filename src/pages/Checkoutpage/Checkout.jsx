import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Checkout.css";
import Button from "../../components/ui/button";
import { login } from "../../redux/UserSlice/UserSlice";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = cartItems.length > 0 ? 21 : 0;
  const tax = subtotal > 0 ? 1.91 : 0;
  const gst = subtotal > 0 ? 1.91 : 0;

  const orderTotal = subtotal + shipping + tax + gst;

  return (
    <div className="checkout-page">

      {/* =================================
          BREADCRUMB
      ================================= */}

      <div className="checkout-container">

        <div className="checkout-breadcrumb">
          <span>Home</span>
          <span>›</span>
          <span>Shopping Cart</span>
          <span>›</span>
          <span>Checkout</span>
        </div>


        {/* =================================
            CHECKOUT HEADER
        ================================= */}

        <div className="checkout-heading-row">

          <div className="checkout-title">
            <h1>Checkout</h1>

            <Link to={"/login"}>
              <Button text={"Sign In"} /></Link>
          </div>


          {/* =================================
              PROGRESS
          ================================= */}

          <div className="checkout-progress">

            <div className="progress-step active">

              <div className="progress-circle">
                <i className="ri-check-line"></i>
              </div>

              <span>Shipping</span>

            </div>


            <div className="progress-line"></div>


            <div className="progress-step">

              <div className="progress-circle">
                2
              </div>

              <span>Review & Payments</span>

            </div>

          </div>

        </div>


        {/* =================================
            MAIN CHECKOUT
        ================================= */}

        <div className="checkout-main">

          {/* =================================
              LEFT SIDE
          ================================= */}

          <div className="shipping-section">

            <h2>Shipping Address</h2>

            <form className="shipping-form"
              onSubmit={(e) => {
                e.preventDefault();

                toast.success("Order Successful!", {
                  position: "top-right",
                  autoClose: 2000,
                });

                setTimeout(() => {
                  navigate("/");
                }, 2200);
              }}>

              {/* Email */}

              <div className="form-group">

                <label>
                  Email Address <span>*</span>
                </label>

                <input type="email" />

                <small>
                  You can create an account after checkout.
                </small>

              </div>


              {/* First Name */}

              <div className="form-group">

                <label>
                  First Name <span>*</span>
                </label>

                <input type="text" />

              </div>


              {/* Last Name */}

              <div className="form-group">

                <label>
                  Last Name <span>*</span>
                </label>

                <input type="text" />

              </div>


              {/* Company */}

              <div className="form-group">

                <label>
                  Company
                </label>

                <input type="text" />

              </div>


              {/* Street */}

              <div className="form-group">

                <label>
                  Street Address <span>*</span>
                </label>

                <input type="text" />

                <input
                  type="text"
                  className="street-second"
                />

              </div>


              {/* City */}

              <div className="form-group">

                <label>
                  City <span>*</span>
                </label>

                <input type="text" />

              </div>


              {/* State */}

              <div className="form-group">

                <label>
                  State/Province <span>*</span>
                </label>

                <div className="select-wrapper">

                  <select defaultValue="">
                    <option value="" disabled>
                      Please, select a region, state or province
                    </option>

                    <option>Gujarat</option>
                    <option>Maharashtra</option>
                    <option>Rajasthan</option>
                    <option>Delhi</option>
                  </select>

                  <i className="ri-arrow-down-s-line"></i>

                </div>

              </div>


              {/* Zip */}

              <div className="form-group">

                <label>
                  Zip/Postal Code <span>*</span>
                </label>

                <input type="text" />

              </div>


              {/* Country */}

              <div className="form-group">

                <label>
                  Country <span>*</span>
                </label>

                <div className="select-wrapper">

                  <select defaultValue="United States ">

                    <option>United States</option>
                    <option>India</option>
                    <option>United Kingdom</option>
                    <option>Canada</option>

                  </select>



                </div>

              </div>


              {/* Phone */}

              <div className="form-group">

                <label>
                  Phone Number <span>*</span>
                </label>

                <input type="tel" />

              </div>


              {/* =================================
                  SHIPPING METHOD
              ================================= */}

              <div className="shipping-method">

                <h3>Shipping Method</h3>

                <div className="shipping-option">

                  <label>

                    <input
                      type="radio"
                      name="shipping"
                      defaultChecked
                    />

                    <span>
                      Flat Rate
                    </span>

                  </label>

                  <strong>
                    ${shipping.toFixed(2)}
                  </strong>

                </div>


                <div className="shipping-option">

                  <label>

                    <input
                      type="radio"
                      name="shipping"
                    />

                    <span>
                      Free Shipping
                    </span>

                  </label>

                  <strong>
                    $0.00
                  </strong>

                </div>

              </div>


              <button
                type="submit"
                className="next-btn"
              >
                Order Now
              </button>

            </form>

          </div>


          {/* =================================
              RIGHT SIDE - ORDER SUMMARY
          ================================= */}

          <aside className="order-summary">

            <h2>Order Summary</h2>

            <div className="items-count">
              {cartItems.length} Item
              {cartItems.length !== 1 ? "s" : ""} in Cart
            </div>


            <div className="checkout-items">

              {cartItems.map((item) => (

                <div
                  className="checkout-item"
                  key={item.id}
                >

                  <div className="checkout-item-image">

                    <img
                      src={item.thumbnail}
                      alt={item.title}
                    />

                  </div>


                  <div className="checkout-item-info">

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      Qty: {item.quantity}
                    </p>

                    <strong>
                      $
                      {(
                        item.price * item.quantity
                      ).toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                      })}
                    </strong>

                  </div>

                </div>

              ))}

            </div>


            {/* Summary totals */}

            <div className="checkout-summary-details">

              <div>
                <span>Subtotal</span>

                <strong>
                  $
                  {subtotal.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                  })}
                </strong>
              </div>

              <div>
                <span>Shipping</span>

                <strong>
                  ${shipping.toFixed(2)}
                </strong>
              </div>

              <div>
                <span>Tax</span>

                <strong>
                  ${tax.toFixed(2)}
                </strong>
              </div>

              <div>
                <span>GST (10%)</span>

                <strong>
                  ${gst.toFixed(2)}
                </strong>
              </div>

              <div className="checkout-total">

                <span>
                  Order Total
                </span>

                <strong>
                  $
                  {orderTotal.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                  })}
                </strong>

              </div>

            </div>

          </aside>

        </div>

      </div>

    </div>
  );
};

export default Checkout;