import React, { useState } from 'react'

function App(props) {
let [name, updateName]=useState()
let [add, updateAddress]=useState()
console.log(props.stdAdd)
   let msgAlert=(n, a)=>{
        updateName(n)
        updateAddress(a)
    }
  return (
    <div>
        <h1>My Name is : {name} and Address is : {add}</h1>
        <button onClick={()=>msgAlert(props.stdName, props.stdAdd)}>Click me</button>
    </div>
  )
}

export default App