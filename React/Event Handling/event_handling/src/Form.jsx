import React, { useState } from 'react'

function Form() {
  let [names, updateName] = useState()
  let [stdName, updateStdName] = useState()

  let get_setInput = (e) => {
    updateName(e.target.value)
  }
  let changeName = () => {
    updateStdName(names)
  }
  let dataSumit=(e)=>{
    e.preventDefault()
   
  return (
    <div>
      <form onSubmit={dataSumit}>
        <label htmlFor="">Name :{ }</label>
        <input type="text" value={names} onChange={get_setInput} name="stdName" />
        <button onClick={changeName}>ADD name </button>
        <h3>(On Change) My Name is : {names} </h3>
        <h3>(On Click) My Name is : {stdName} </h3>
        </form>
    </div>

  )
}

export default Form