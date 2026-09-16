import React from "react";
import ProductCard from "../../components/common/ProductCard/ProductCard.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/ProductSlice/ProductSlice.js";
import image from "../../assets/image.png";
// import ProductCard from "../components/common/ProductCard/ProductCard";

const Productsection = () => {

  const dispatch = useDispatch();

  const { products, loading, error } = useSelector(
    (state) => state.products
  );

  const state = useSelector((state) => state);

  console.log(state);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>{error}</h2>;

  return (
<>
      <div className="productcard1">
        <div className="product-container product-container1">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
      <div className="offersection">
        <img src={image} alt="" />
        <span> | own it now, up to 6 months interest free learn more</span>
      </div>

      <div className="product-container">
        <div className="custombuild">
          <div>
            <span>Custome <br />Builds</span>
          </div>
          <a href="">See all product</a>
        </div>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
       
          <div className="productcard1">
        <div className="productheading">
          <div>
            <span>MSI GS Series</span>         
            <p href="">MSI GT Series</p>
            <p href="">MSI GL Series</p>
            <p href="">MSI GE Series</p>
          </div>
        </div>
      <div className="product-container">
        <div className="custombuild background2">
          <div>
             <span>Msi <br />Laptops</span>
          </div>
          <a href="">See all product</a>
        </div>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
      </div>

           <div className="productcard1">
        <div className="productheading">
          <div>
            <span>MSI Infinute Series</span>         
            <p href="">MSI Triden</p>
            <p href="">MSI GL Series</p>
            <p href="">MSI Nightblade</p>
          </div>
        </div>
      <div className="product-container">
        <div className="custombuild background3">
          <div>
             <span>Desktops</span>
          </div>
          <a href="">See all product</a>
        </div>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
      </div>

                 <div className="productcard1">
      
      <div className="product-container">
        <div className="custombuild background4">
          <div>
             <span>Gaming <br />Monitors</span>
          </div>
          <a href="">See all product</a>
        </div>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
         
        ))}
    

      </div>

      </div>
      </>
      );
};

      export default Productsection;