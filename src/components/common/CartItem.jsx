import React from "react";
import { useDispatch } from "react-redux";
import "./CartItem.css";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../redux/CartSlice/CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const subtotal = item.price * item.quantity;

  return (
    <div className="cart-item">

      {/* Product */}
      <div className="cart-product">

        <div className="cart-product-image">
          <img
            src={item.thumbnail}
            alt={item.title}
          />
        </div>

        <div className="cart-product-info">
          <h3>{item.title}</h3>

          <p>
            {item.description}
          </p>

          <span className="cart-warranty">
            and Mouse 3 Years Warranty
          </span>
        </div>

      </div>

      {/* Price */}
      <div className="cart-price">
        ${item.price.toLocaleString("en-US", {
          minimumFractionDigits: 2,
        })}
      </div>

      {/* Quantity */}
      <div className="quantity-box">

        <span>{item.quantity}</span>

        <div className="quantity-arrows">

          <button
            onClick={() =>
              dispatch(increaseQuantity(item.id))
            }
          >
            ▲
          </button>

          <button
            onClick={() =>
              dispatch(decreaseQuantity(item.id))
            }
          >
            ▼
          </button>

        </div>

      </div>

      {/* Subtotal */}
      <div className="cart-subtotal">
        ${subtotal.toLocaleString("en-US", {
          minimumFractionDigits: 2,
        })}
      </div>

      {/* Action Buttons */}
      <div className="cart-item-actions">

        <button
          className="remove-icon"
          onClick={() =>
            dispatch(removeFromCart(item.id))
          }
          title="Remove"
        >
          ×
        </button>

        <button
          className="edit-icon"
          title="Edit"
        >
          ♧
        </button>

      </div>

    </div>
  );
};

export default CartItem;