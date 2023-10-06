import React, { useEffect, useState } from 'react'
import Product from './Product'
import Prodcut_wise from './Prodcut_wise'
import { Routes, Route, Link } from 'react-router-dom'

function Fetch_data_from_api() {
    let [cat, updateCat] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(r => r.json())
            .then(data => updateCat(data))
    }, [])


    return (
        <div class="cont">
            <div className="cat">
                <div class="title">Categories</div>
                <ul>
                    {cat.map((c) =>
                        <li> <Link to={`/cat/${c}`}> {c} </Link> </li>
                    )}
                </ul>
            </div>
            <div className="details">
                       
                       <Routes>
                        <Route path ="/" element = {<Product/> }/>
                        <Route path ="/cat/:cat_name" element = {<Prodcut_wise/> }/>
                       </Routes>
                       
            </div>
        </div>
    )
}

export default Fetch_data_from_api