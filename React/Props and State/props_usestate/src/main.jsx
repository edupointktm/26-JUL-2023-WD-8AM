import React from 'react'
import ReactDOM from 'react-dom/client'
import CompA from './CompA'

let names = "Prabhat"
let address = "Janakpur"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <CompA stdname={names} stdaddress={address}/>
  </React.StrictMode>,
)
