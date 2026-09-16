import React from 'react'
import Companylogo from "./companylist/Companylogo.jsx";
import BlogCard from "./Blogsection/BlogCard.jsx";
import {blogs} from "../../data/Blogdata.js"
import ReviewSection from "./Reviewsection/Reviewsection.jsx";
import Servicesection from '../../components/common/Servicesection/Serivcesection.jsx';
import Productsection from './Productsection.jsx';
import ProductCard from '../../components/common/ProductCard/ProductCard.jsx';

const Homepage = () => {
  return (
    <div>
    <Productsection/>    
    <Companylogo/>
   <div className="blog-container">
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
        />
      ))}
    </div>

    <ReviewSection/>
  
    </div>
  )
}

export default Homepage