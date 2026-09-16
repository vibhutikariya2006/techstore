import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Filterproduct } from "../../../redux/ProductSlice/ProductSlice";
import { useParams } from 'react-router-dom';
import "./Filtersidebar.css"
import ProductCard from '../ProductCard/ProductCard';
import Companylogo from "../../../pages/Homepage/companylist/Companylogo"
import Button from '../../ui/button';
import filterimage from "../../../assets/filterimage.png"


const Filtersidebar = () => {
    const dispatch = useDispatch();
    const {products, loading, error} = useSelector((state)=>state.products)
    const category = useParams();
  //   const [selectprice, setselectprice] = useState(" ");
  //   const filteredProducts = products
  // .filter((product) => {
  //   if (selectprice === "0-500")
  //     return product.price >= 0 && product.price <= 500;

  //   if (selectprice === "500-1000")
  //     return product.price > 500 && product.price <= 1000;

  //   if (selectprice === "1000-2000")
  //     return product.price > 1000 && product.price <= 2000;

  //   if (selectprice === "2000+")
  //     return product.price > 2000;

  //   return true;
  // });
  // const priceHandler = (price)=>{
  //   setselectprice(price);
  //   filteredProducts.map((product)=>{
  //     <ProductCard
  //     key={product.id}
  //     product={products}
  //     />
  //   })
   
  // }
  return (

      <div className="filter-sidebar">
             <h3 className="filter-title">Category</h3>
             
     <button
      className="category-btn"
      onClick={() =>
        dispatch(Filterproduct({ category: "laptops" }))
      }
    >
      Laptop
    </button>
     <button
      className="category-btn"
      onClick={() =>
        dispatch(Filterproduct({ category: "smartphones" }))
      }
    >
      Smartphones
    </button>
     <button
      className="category-btn"
      onClick={() =>
        dispatch(Filterproduct({ category: "mobile-accessories" }))
      }
    >
      Mobile-accessories
    </button>
     <button
      className="category-btn"
      onClick={() =>
        dispatch(Filterproduct({ category: "tablets" }))
      }
    >
      Tablets
    </button>
    <br />
      <h3 className="filter-title">Price</h3>
      
      <button
      className="category-btn"
  >
      $0 - $500
    </button>
      <button
      className="category-btn"
      >
      $500 - $1000
    </button>
      <button
      className="category-btn"
     >
      $1000 - $2000
    </button>
      <button
      className="category-btn"
     >
      $2000 +
    </button>
      <br />
          <h3 className="filter-title">Color</h3>
          <div className="color-list">
            <div className="red"></div>
            <div className="black"></div>
          </div>
          <h3 className="filter-title">Filter Name</h3>
         <div>
           <Button text={"Apply Filter"}/>
         </div>
         <br />
          <h3 className="filter-title">Brands</h3>
   <Companylogo/>
             <h3 className="filter-title">Compare Products</h3>
             <div className="filter-span">
              <span>You have no items to compare.</span>
             </div>
             <br />
                          <h3 className="filter-title">My Wish List</h3>
          <div className="filter-span">
               <span>You have no items in your wish list.</span>
          </div>
          <br />
          <img src={filterimage} alt="" />


    </div>
  )
}

export default Filtersidebar;
