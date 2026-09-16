import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/layout/Navbar/Navbar";
import Productsection from "./pages/Homepage/Productsection";
import Cart from "./pages/Cart";
import Homepage from "./pages/Homepage/Homepage";
import Login from "./features/login";
import Catalog from "./pages/Catalogpage/Catalog";
import Filtersidebar from "./components/common/FilterSidebar/Filtersidebar";
import Footer from "./components/layout/Footer/Footer";
import Productdetails from "./components/common/ProductCard/ProductDetails";
import SerivceSection from "./components/common/Servicesection/Serivcesection"
import Checkout from "./pages/Checkoutpage/Checkout";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/catalog" element={<Catalog />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:category" element={<Filtersidebar />} />
        <Route path="/productdetails/:id" element={<Productdetails />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
            <ToastContainer  
    position= "top-right"
    autoClose= {2000}
    hideProgressBar= {false}
    closeOnClick= {true}
    pauseOnHover= {true}
    draggable= {true} />
   
    <SerivceSection/>
<Footer/>
    </BrowserRouter>
  );
}

export default App; 