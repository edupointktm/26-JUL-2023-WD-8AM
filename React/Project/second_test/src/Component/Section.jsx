import React from 'react'
import Home from './Page/Home'
import {  Routes, Route } from 'react-router-dom'
import About from './Page/About'
import Contact from './Page/Contact'

function Section() {
    return (
        <>
           
            <Routes>
                <Route path="/" element={<Home/>}/> 
                <Route path="/about" element = {<About/>}/>
                <Route path="/contact" element ={<Contact/>}/>
                {/* <Route path="/gallery" element ={<Gallery/>}/> */}
            </Routes>
           
        </>
    )
}

export default Section