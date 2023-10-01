import React from 'react'
import { useParams } from 'react-router-dom'
import Data from '../../../src/Data'
function Product_details() {
    let {pro_id} =useParams()
let get_data = Data.find((gd)=> gd.id==pro_id)
    console.log(get_data)
  return (
    <>
        <div className="container">
            <div className="row ">
            <h1> Product Detials ID = {pro_id} </h1>

            <div className="col-lg-4">
                <img src={get_data.image} alt="" className="img-fluid"/>
            </div>
           
            <div className="col-lg-6">
                Pro ID : {get_data.id}   <br/><br/>
                Title :  {get_data.title}   <br/><br/>
                Descritption :  <br/><br/>
                Descritption : <br/><br/>
            </div>
            
        
        </div>
        </div>
    </>
  )
}

export default Product_details