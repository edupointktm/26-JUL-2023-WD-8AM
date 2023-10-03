import React, { useEffect, useState } from 'react'

function Example_of_use_effect() {
let [count, updateCount]=useState(5)
let [con, updateCon]=useState(10)

useEffect(()=>{
    console.log("I am work on effect "+count + con)
},[con])

    return (
        <>
            <h1>
                <button onClick={()=>updateCount(count+1)}>+</button>
                <span> {count} </span>
                <button onClick={()=>updateCount(count-1)}> - </button>
            </h1>
            <hr/>
            <h1>
                <button onClick={()=>updateCon(con+1)}>+</button>
                <span> {con} </span>
                <button onClick={()=>updateCon(con-1)}> - </button>
            </h1>
        </>
    )
}

export default Example_of_use_effect