import React, { useEffect, useState } from 'react'

function Product() {
    let [product, updateProduct] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(r => r.json())
            .then(data => updateProduct(data))
    }, [])
    return (
        <>
            <section className="product">
                <div className="title">
                    <h1> All Product </h1>
                </div>

                <div className="cont-2">

                    {product.map((pro) =>
                        <div className="card">
                            <div className="image">
                                <img src={pro.image} alt="" />
                            </div>
                            <div className="title">
                                <h3>Glass</h3>
                            </div>
                            <div className="price"><h4>Rs 450</h4></div>
                            <div className="buy px-3"><button className="btn btn-primary">BUY</button></div>
                        </div>
                    )}


                </div>
            </section>
        </>
    )
}

export default Product