import React, { useEffect, useState } from "react";
import "./Reviewsection.css";
import { reviews } from "../../../data/Review";

const ReviewSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
        console.log("Changing...");
        
      setActive((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);
  console.log(reviews.length);

  return (
<div className="review">
      <section className="review-section">
  <div className="review-wrapper">

    <div className="review-top">

      <div className="quote">
        <i className="ri-double-quotes-l"></i>
      </div>

      <div className="review-content">
        <p>{reviews[active].review}</p>
        <h6>- {reviews[active].name}</h6>
      </div>

    </div>

    <div className="review-bottom">

      <button>Leave Us A Review</button>

      <div className="dots">
        {reviews.map((_, index) => (
          <span
            key={index}
            className={active === index ? "dot active" : "dot"}
            onClick={() => setActive(index)}
          ></span>
        ))}
      </div>

    </div>

  </div>
</section>
</div>
  );
};

export default ReviewSection;