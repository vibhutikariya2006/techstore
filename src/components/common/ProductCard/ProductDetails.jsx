import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import {useParams} from "react-router-dom"
import { Productdetails } from '../../../redux/ProductSlice/ProductSlice'
import "./ProductDetails.css"
import "./ProductCard1.css"
import image from "../../../assets/image.png"
import companyfeaturelogo1 from "../../../assets/companyfeaturelogo1.png"
import companyfeaturelogo2 from "../../../assets/companyfeaturelogo2.png"
import companyfeaturelogo3 from "../../../assets/companyfeaturelogo3.png"
import companyfeaturelogo4 from "../../../assets/companyfeaturelogo4.png"

const ProductDetails = () => {
    const dispatch = useDispatch();
    const{singleproduct, loading, error} = useSelector((state)=>state.products)
    const {id} = useParams();
    const [activeImage, setActiveImage] = useState(0);
    const[detailstype, setdetailstype] = useState("About")
    console.log(singleproduct);

      


    const companyfeatureslist =[ 
      {id:1, logo: companyfeaturelogo1, text: "Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience."},
      {id:2, logo: companyfeaturelogo2, text: "The new GeForce® RTX SUPER™ Series has more cores and higher clocks for superfast performance compared to previous-gen GPUs."},
      {id:3, logo: companyfeaturelogo3, text: "Unleash the full potential with the latest SSD technology, the NVM Express. 6 times faster than traditional SATA SSD."},
      {id:4, logo: companyfeaturelogo4, text: "Featuring the latest 10th Gen Intel® Core™ processors, memory can support up to DDR4 2933MHz to delivers an unprecedented gaming experience."}
    ]
    
    useEffect(()=>{
        dispatch(Productdetails({id}))
    }, [dispatch, id])

     // Reset image when product changes
  useEffect(() => {
    setActiveImage(0);
  }, [singleproduct]);

  // Automatic image slider
  useEffect(() => {
    if (!singleproduct?.images?.length) return;

    const interval = setInterval(() => {
      setActiveImage((prev) =>
        (prev + 1) % singleproduct.images.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [singleproduct]);

      if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  if (!singleproduct) {
    return <h2>Product not found</h2>;
  }
  return (
  <>
  <div className="product-tabs">

    <button
        className={detailstype === "About" ? "active" : ""}
        onClick={() => setdetailstype("About")}
    >
        About Product
    </button>

    <button
        className={detailstype === "details" ? "active" : ""}
        onClick={() => setdetailstype("details")}
    >
        Details
    </button>
    <button
        className={detailstype === "specs" ? "active" : ""}
        onClick={() => setdetailstype("specs")}
    >
        Specs
    </button>

</div>
    <section className="product-details-page">

      {/* LEFT SIDE */}
      <div className="product-info">

        {/* Breadcrumb */}
        <div className="breadcrumb">
          <span>Home</span>
          <span className="breadcrumb-arrow">›</span>

          <span>
            {singleproduct.category || "Laptops"}
          </span>

          <span className="breadcrumb-arrow">›</span>

          <span className="current">
            {singleproduct.brand || singleproduct.title}
          </span>
        </div>

        {/* Product title */}
        <h1 className="product-title">
          {singleproduct.title}
        </h1>
        {/* Description */}
         <div>
          {detailstype === "About" && (<div className="about-content">
           <p className="product-description">
          {singleproduct.description}
        </p>
         </div>)}
          {detailstype === "details" && (<div className="details-content">
           <p className="product-description">
          <ul>
            <li>Brand:  {singleproduct.brand}</li>
            <li>Return Policy:  {singleproduct.returnPolicy}</li>
            <li>Shipping Information:  {singleproduct.shippingInformation}</li>
            <li>Warranty Information:  {singleproduct.warrantyInformation}</li>
            <li>Minimum Order Quantity:  {singleproduct.minimumOrderQuantity}</li>
            <li>Discount Percentage:  {singleproduct.discountPercentage}</li>
            <li>Availability Status:  {singleproduct.availabilityStatus}</li>
          </ul>
        </p>
         </div>)}
          {detailstype === "specs" && (<div className="specs-content">
           <p className="product-description">
            <div className="catalog-product-specification-area">

        <div className="catalog-product-specification-row">
          <span>CPU</span>
          <strong>{singleproduct.cpu || "N/A"}</strong>
        </div>

        <div className="catalog-product-specification-row catalog-product-featured-row">
          <span>Featured</span>
          <strong>{singleproduct.featured || "N/A"}</strong>
        </div>

        <div className="catalog-product-specification-row">
          <span>I/O Ports</span>
          <strong>{singleproduct.ports || "N/A"}</strong>
        </div>

      </div>

        </p>
         </div>)}
         </div>
          
       
        

        {/* Review */}
        <a href="#reviews" className="review-link">
          Be the first to review this product
        </a>

        
        {/* Color options */}
        <div className="color-options">

          <button className="color active-color"></button>

          <button className="color beige-color"></button>

          <button className="color light-color"></button>

        </div>

        {/* Question + SKU */}
        <div className="question-row">

          <div className="question">
            <strong>Have a Question?</strong>

            <a href="#contact">
              Contact Us
            </a>
          </div>

          <div className="sku">
            SKU {singleproduct.sku || "N/A"}
          </div>

        </div>

        {/* More Information */}
        <div className="more-information">

          <span>+</span>

          <strong>
            MORE INFORMATION
          </strong>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="product-image-section">

        {/* Vertical icons */}
        <div className="side-icons">

          <button>
           <i className="ri-heart-line"></i>
          </button>

          <button>
           <i className="ri-bar-chart-line"></i>
          </button>

          <button>
            <i className="ri-mail-line"></i>
          </button>

        </div>

        {/* Product image */}
        <div className="product-image-wrapper">

          <img
            src={singleproduct.images[activeImage]}
            alt={singleproduct.title}
            className="product-image"
          />

        </div>

        {/* Zip information */}
        <div className="zip-info">

          <div className="zip-logo">
            <span className="zip-text">
              <img src={image} alt="" />
            </span>
          </div>

          <div className="zip-description">
            <span>
             own it now, up to 6 months 
            </span>

            <span>
              interest free learn more
            </span>
          </div>

        </div>

        {/* Slider dots */}
             <div className="slider-dots">

          {singleproduct.images?.map((image, index) => (
            <button
              key={image}
              className={`dot ${
                activeImage === index ? "active-dot" : ""
              }`}
              onClick={() => setActiveImage(index)}
            />
          ))}

        </div>

      </div>

    </section>

<section className="outplay-section">

    {/* LEFT SIDE */}
    <div className="outplay-text">

        <div className="outplay-content">

            <h2>
                Outplay the
                <br />
                Competition
            </h2>

            <p>
                Experienced 4X faster i7 computing from last
                generation. MSI Desktop equips the 10th Gen.
                Intel® Core™ i7 processor with the utmost
                computing power to bring you an unparalleled
                gaming experience.
            </p>

            <p className="performance">
                *Performance compared to i7-9700. Specs
                varies by model.
            </p>

            <div className="outplay-dots">
                <span className="active"></span>
                <span></span>
                <span></span>
            </div>

        </div>

    </div>


    {/* RIGHT SIDE */}
    <div className="outplaybackground"></div>

</section>

  <section className="support-section">

      <div className="support-input">

        <div className="support-options">

          <div className="support-item">
            <span>Product Support</span>
            <span className="support-arrow">→</span>
          </div>

          <div className="support-item">
            <span>FAQ</span>
            <span className="support-arrow">→</span>
          </div>

          <div className="support-item">
            <span>Our Buyer Guide</span>
            <span className="support-arrow">→</span>
          </div>

        </div>

      </div>

      <div className="support-image">

      </div>

    </section>
    <section className='company-features'>
      <div className="company-features-title">
        <h3>Featues</h3>
        <span>The MPG series brings out the best in gamers by allowing full expression in color with advanced RGB lighting control and synchronization.</span>
      </div>
      <div className="features-container">
          {companyfeatureslist.map((feature) => (
      <div className="feature-card" key={feature.id}>

        <div className="feature-image">
          <img
            src={feature.logo}
            alt={`feature-${feature.id}`}
          />
        </div>

        <p>
          {feature.text}
        </p>

      </div>
    ))}
      </div>

    </section>
  </>
 
  )
}

export default ProductDetails