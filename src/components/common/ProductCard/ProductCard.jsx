import React from "react";
import "./ProductCard.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/CartSlice/CartSlice";
import { toast } from "react-toastify";
import Button from "../../ui/button";

const ProductCard = ({ product }) => {

  const dispatch = useDispatch();

  const {
    thumbnail,
    title,
    rating,
    price,
    stock,
    discountPercentage,
    description
  } = product;

  const handleAddToCart = () => {
  dispatch(addToCart(product));

  toast.success("Product added to cart!", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};


  return (
    <div className="product-card">

      {/* Stock Status */}
      <div className="stock-status">
        <i
          className={`${
            stock ? "ri-checkbox-circle-fill" : "ri-close-circle-fill"
          } ${stock ? "stock-success" : "stock-danger"}`}
        ></i>

        <span>
          {stock ? "In Stock" : "Check Availability"}
        </span>
      </div>

      {/* Product Image */}
      <div className="product-image-container">
        <img
          src={thumbnail}
          alt={title}
          className="product-image"
        />
      </div>

      {/* Rating */}
      <div className="product-rating">
        <span className="stars">
          {"★".repeat(Math.round(rating))}
          {"☆".repeat(5 - Math.round(rating))}
        </span>

        <span className="reviews-count">
          Reviews (4)
        </span>
      </div>

      {/* Product Title */}
      <h3 className="product-title">{title}</h3>
      {/* <span className="product-description">{description}</span> */}

      {/* Price */}
      <div className="product-price-container">
        {/* <span className="old-price">${discountPercentage}</span> */}
        <span className="current-price">${price}</span>
      </div>

      {/* Add To Cart */}
      {/* <button
        className="add-cart-btn"
        onClick={handleAddToCart}
      >
        Add To Cart
      </button> */}

<Button text={"ADD TO CART"} eventHandler={handleAddToCart}/>   

    </div>
  );
};

export default ProductCard;