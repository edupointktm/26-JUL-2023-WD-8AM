import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Increment_decrement from './Increment_decrement.jsx'
import Form from './Form.jsx'

let names = "Prabhat Kumar Mallik"
let add = "Janakpur"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Increment_decrement/> <br/> <hr/>
    
    <App stdName={names} stdAdd={add} /> <br/> <hr/>

    
    <Form/>

  </React.StrictMode>,
)
