import React from 'react'
import "./Sidebar.css"
import Category from "./Category/Category"
import { Link } from "react-router-dom"
import Colors from "./Colors/Colors"
import Price from "./Price/Price"

function Sidebar({handleChange}) {
  return (
    <>
        <section className='sidebar'>
            <div className='logo-container'>
              <Link to="/" className="logo-link">
                <h1>Shoes.com</h1>
              </Link>  
            </div>

            <Category handleChange={handleChange}/>
            <Price handleChange={handleChange}/>
            <Colors handleChange={handleChange}/>
        </section>
    </>
  )
}

export default Sidebar