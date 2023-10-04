import React, { useEffect, useState } from 'react'
import Product from './Product'

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
                        <li>  {c}  </li>
                    )}
                </ul>
            </div>
            <div className="details">
                       <Product/> 
            </div>
        </div>
    )
}

export default Fetch_data_from_api