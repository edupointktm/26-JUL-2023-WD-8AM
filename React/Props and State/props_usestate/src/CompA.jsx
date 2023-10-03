import React, { useState } from 'react'

function CompA(props) {
    let [msg, updateMsg]=useState("Prabhat")

    
 
    return (
    <div><h1> My name is : {msg}  </h1></div>
  )
}

export default CompA