import React from 'react'
import ReactDOM from 'react-dom/client'
import Example_of_use_effect from './Example_of_use_effect'
import Fetch_data_from_api from './Fetch_data_from_api'
import './main.scss'
import Nav from './Nav'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Example_of_use_effect/> */}
    <Nav/>
    <Fetch_data_from_api/>
  </React.StrictMode>,
)
