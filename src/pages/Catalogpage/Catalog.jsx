import React, { useEffect, useState } from "react";
import ProductCard from "../../components/common/ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/ProductSlice/ProductSlice";
import "./Catalog.css"
import Filtersidebar from "../../components/common/FilterSidebar/Filtersidebar";
import catalogbackground1 from "../../assets/catalogbackground1.png"
import ProductCard1 from "../../components/common/ProductCard/ProductCard1";
import SerivceSection from "../../components/common/Servicesection/Serivcesection"
import { Link } from "react-router-dom";
const Catalog = () => {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector(
    (state) => state.products
  );
  const [view, setview] = useState("grid");
  // const [selectcategory, setselectcategory] = useState("products");
  // const [selectprice, setselectprice] = useState("all");


// const filteredProducts = products
//   .filter((product) => {
//     return (
//       selectcategory === "products" ||
//       product.category === selectcategory
//     );
//   })
//   .filter((product) => {
//     if (selectprice === "all") return true;

//     if (selectprice === "0-500")
//       return product.price >= 0 && product.price <= 500;

//     if (selectprice === "500-1000")
//       return product.price > 500 && product.price <= 1000;

//     if (selectprice === "1000-2000")
//       return product.price > 1000 && product.price <= 2000;

//     if (selectprice === "2000+")
//       return product.price > 2000;

//     return true;
//   });

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <>
    <div className="catalog-img">
      <img src={catalogbackground1} alt="" />
      <div className="catalog-navigation">
      <span>Home  › Laptops  ›  Everyday Use Notebooks  ›  MSI Prestige Series  ›  </span>
      <p>MSI WS Series</p>
    </div>
    </div>
    
    <div className="catalog-header">
      <h1>MSI PS Series (20)</h1>
    </div>
   <div className="catalog-container">
            <Filtersidebar/> 
            {/* <Filtersidebar
      selectcategory={selectcategory}
      setselectcategory={setselectcategory}
      selectprice = {selectprice}
      setselectprice = {setselectprice}
    /> */}

       <div className="catalog-box">
        <div className="catalog-box-top">
          <span>Items 1-35 of 61</span>
          <div className="catalog-box-left">
            <button>Sort By: Position <i className="ri-arrow-drop-down-line"></i></button>
            <button>Show: 35 per page  <i className="ri-arrow-drop-down-line"></i></button>
            <div>
              <button onClick={()=>{setview("grid")}}><i className="ri-grid-fill"></i></button>
              <button onClick={()=>{setview("list")}}><i className="ri-bar-chart-horizontal-line"></i></button>
            </div>
          </div>
      
        </div>
        {/* {products.map((product) => (
          // <ProductCard
          //   key={product.id}
          //   product={product}
          // />
          <ProductCard1
            key={product.id}
            product={product}
          />
        ))} */}

        <div
  className={
    view === "grid"
      ? "catalog-box-grid"
      : "catalog-products-list"
  }
>
  {products.map((product) =>
    view === "grid" ? (
      <Link key={product.id} to={`/productdetails/${product.id}`}>
      <ProductCard
        key={product.id}
        product={product}
      />
      </Link>
    ) : (
      <ProductCard1
        key={product.id}
        product={product}
      />
    )
  )}
</div>
      </div>
   </div>
  
    </>


  );
};

export default Catalog;

