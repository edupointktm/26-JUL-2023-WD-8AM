import React from 'react'
import Home from './Page/Home'
import {Routes, Route} from "react-router-dom";
import Page_not_found from './Page/Page_not_found';
import Contact from './Page/Contact';
import About from './Page/About';
import Product_details from './Page/Product_details';
function Section() {
  return (
    <>
        <Routes>

            <Route path="/" element={<Home/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/product_details/:pro_id" element={<Product_details/>} />

            <Route path="*" element ={<Page_not_found/>}/>

           
        </Routes>
    </>
  )
}

export default Section