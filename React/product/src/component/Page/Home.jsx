import React from 'react'
import Data from '../../../src/Data'
import { Link } from 'react-router-dom'
function Home() {
    return (
        <>
            <h1> Our Product </h1>

            <div className="container">
                <div className="row">
                {Data.map((d)=>
                    <div className="col">
                        <div className="card" style={{ width: '18rem' }}>
                           <Link to={`/product_details/${d.id}`}> <img src={d.image} className="card-img-top img-fluid" alt="..." /></Link>
                            <div className="card-body">
                                <h5 className="card-title"> {d.title} </h5>
                                <p className="card-text">Rs. {d.price}</p>
                                <a href="#" className="btn btn-primary">BUY</a>
                            </div>
                        </div>
                    </div>
                    )}

                    


                </div>
            </div>

        </>
    )
}

export default Home