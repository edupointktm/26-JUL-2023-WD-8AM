import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useSearchParams } from 'react-router-dom'

function Prodcut_wise() {
    let [cat, updateCat]=useState([])
    // let[cat_wise, updateCate_Wise]=useState([])
    let {cat_name}=useParams()

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(r => r.json())
            .then(data => updateCat(data))
    }, [])
   let cat_wise = cat.filter((c)=>c.category==cat_name)
    console.log(cat_wise)
  return (
    <>
            <section className="product">
                <div className="title">
                    <h1> {cat_name} </h1>
                </div>

                <div className="cont-2">

                 {cat_wise.map((c)=>                        <div className="card">
                            <div className="image">
                                <img src={c.image} alt="" />
                            </div>
                            <div className="title">
                                <h3>{c.title}</h3>
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

export default Prodcut_wise