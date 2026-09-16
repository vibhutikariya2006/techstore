import React from "react";
import "./ProductCard1.css";
import Button from "../../ui/button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/CartSlice/CartSlice";
import { toast } from "react-toastify"; 

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
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
    <div className="catalog-product-wrapper">

      {/* Product Image */}
      <div className="catalog-product-image-area">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="catalog-product-image"
        />

          <div className="catalog-product-rating-area">

          <div className="catalog-product-stars">
             <span className="stars">
          {"★".repeat(Math.round(product.rating))}
          {"☆".repeat(5 - Math.round(product.rating))}
        </span>
          </div>

          <span className="catalog-product-review-text">
            Reviews(4)
          </span>

        </div>
      </div>

      {/* Product Information */}
      <div className="catalog-product-details">

        <p className="catalog-product-sku">
          SKU {product.sku || product.id}
        </p>

        <h3 className="catalog-product-name">
          {product.title}
        </h3>
          
          <div className="catalog-product-description">
            {product.description}
        </div>
        {/* Price */}
        <div className="catalog-product-price-area">
          <span className="catalog-product-current-price">
            ${product.price}
          </span>
        </div>
        

        {/* Rating */}
        {/* <div className="catalog-product-rating-area">

          <div className="catalog-product-stars">
             <span className="stars">
          {"★".repeat(Math.round(product.rating))}
          {"☆".repeat(5 - Math.round(product.rating))}
        </span>
          </div>

          <span className="catalog-product-review-text">
            Reviews ({product.reviews?.length || 0})
          </span>

        </div> */}

        {/* Add To Cart */}
        <Button text={"Add TO CART"} eventHandler={handleAddToCart}/>

      </div>

      {/* Specifications */}
      <div className="catalog-product-specification-area">

        <div className="catalog-product-specification-row">
          <span>CPU</span>
          <strong>{product.cpu || "N/A"}</strong>
        </div>

        <div className="catalog-product-specification-row catalog-product-featured-row">
          <span>Featured</span>
          <strong>{product.featured || "N/A"}</strong>
        </div>

        <div className="catalog-product-specification-row">
          <span>I/O Ports</span>
          <strong>{product.ports || "N/A"}</strong>
        </div>

      </div>

      {/* Right Side */}
      <div className="catalog-product-side-area">

        {/* Stock */}
        <div className="catalog-product-stock-status">
          <span className="catalog-product-stock-dot"></span>
          <span>{product.stock || "In stock"}</span>
        </div>

        {/* Action Icons */}
        <div className="catalog-product-action-group">

          <button
            className="catalog-product-action-button"
            type="button"
          >
           <i class="ri-mail-line"></i>
          </button>

          <button
            className="catalog-product-action-button"
            type="button"
          >
<i class="ri-bar-chart-line"></i>          
</button>

          <button
            className="catalog-product-action-button"
            type="button"
          >
            <i class="ri-heart-line"></i>
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductCard;