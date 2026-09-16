  import React from "react";
  import { useSelector } from "react-redux";
  import CartItem from "../components/common/CartItem";
  import "./Cart.css"
  import image from "../assets/image.png"
import Checkout from "./Checkoutpage/Checkout";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = cartItems.length > 0 ? 21 : 0;

  const tax = subtotal > 0 ? 1.91 : 0;

  const gst = subtotal > 0 ? 1.91 : 0;

  const orderTotal = subtotal + shipping + tax + gst;

  return (
    <div className="cart-page">

      {/* Top Border */}
      <div className="cart-top-border"></div>

      {/* Breadcrumb */}
      <div className="cart-container">
        <div className="breadcrumb">
          <span>Home</span>
          <span>›</span>
          <span>Login</span>
        </div>

        <div className="cart-layout">

          {/* ================= LEFT SIDE ================= */}
          <div className="cart-left">

            <h1>Shopping Cart</h1>

            {cartItems.length === 0 ? (
              <div className="empty-cart">
                <h2>Your Cart is Empty</h2>
                <button>Continue Shopping</button>
              </div>
            ) : (
              <>
                {/* Table Header */}
                <div className="cart-header">
                  <div>Item</div>
                  <div>Price</div>
                  <div>Qty</div>
                  <div>Subtotal</div>
                  <div></div>
                </div>

                {/* Cart Items */}
                <div className="cart-items">
                  {cartItems.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                    />
                  ))}
                </div>

                {/* Bottom Buttons */}
                <div className="cart-actions">

                  <div className="cart-actions-left">
                    <button className="continue-btn">
                      Continue Shopping
                    </button>

                    <button className="clear-btn">
                      Clear Shopping Cart
                    </button>
                  </div>

                  <button className="update-btn">
                    Update Shopping Cart
                  </button>

                </div>
              </>
            )}
          </div>

          {/* ================= RIGHT SIDE ================= */}
          {cartItems.length > 0 && (
            <div className="cart-summary">

              <h2>Summary</h2>

              {/* Shipping */}
              <div className="summary-dropdown">
                <span>Estimate Shipping and Tax</span>
                <i className="ri-arrow-down-s-line"></i>
              </div>

              <p className="summary-description">
                Enter your destination to get a shipping
                estimate.
              </p>

              {/* Discount */}
              <div className="summary-dropdown discount">
                <span>Apply Discount Code</span>
                <i className="ri-arrow-down-s-line"></i>
              </div>

              {/* Price Details */}
              <div className="summary-details">

                <div className="summary-row">
                  <span>Subtotal</span>
                  <strong>
                    ${subtotal.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                    })}
                  </strong>
                </div>

                <div className="summary-row">
                  <span>Shipping</span>
                  <strong>
                    ${shipping.toFixed(2)}
                  </strong>
                </div>

                <small>
                  Standard rate - Prices may vary depending on the
                  destination. This fee will add to your final total.
                </small>

                <div className="summary-row">
                  <span>Tax</span>
                  <strong>${tax.toFixed(2)}</strong>
                </div>

                <div className="summary-row">
                  <span>GST (10%)</span>
                  <strong>${gst.toFixed(2)}</strong>
                </div>

                <div className="summary-row order-total">
                  <span>Order Total</span>
                  <strong>
                    ${orderTotal.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                    })}
                  </strong>
                </div>

              </div>

              {/* Checkout */}
            <Link to="/checkout">
              <button className="checkout-btn">
                Proceed to Checkout
              </button>
            </Link>

              <button className="paypal-btn">
                Check out with
                <span className="paypal-text">
                  PayPal
                </span>
              </button>

              <button className="multiple-address-btn">
                Check Out with Multiple Addresses
              </button>

              {/* Zip */}
              <div className="zip-payment">
                <strong>
                  <img src={image} alt="" />
                </strong>

                <span>
                  own it now, up to 6 months interest free Learn more
                </span>

                
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Cart;