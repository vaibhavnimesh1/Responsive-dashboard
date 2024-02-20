import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

const footer = () => {
  return (
    <div>
        <ul className="footer">
       
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/details">Details</Link>
        </li>
        <li>
          <Link to="/more">More</Link>
        </li>
        {/* <li className="logout">
          <Link to="/logout">Logout</Link>
        </li> */}
      </ul>
    </div>
  )
}

export default footer