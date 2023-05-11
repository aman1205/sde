import React from 'react'
import { Link } from 'react-router-dom/dist';
import './Navbar.css';
const Navbar =() =>{
  return (
    <div>
      <nav>
         <div className="logo">
            API HUB
         </div>
         <input type="checkbox" id="click"/>
         <label htmlFor="click" className="menu-btn">
         <i className="fas fa-bars"></i>
         </label>
         <ul>
            <li><Link to="/general">GENERAL</Link></li>
            <li><Link to="/user">User</Link></li>
            <li><Link to="/country">Country</Link></li>
            <li><Link to="/table">Table</Link></li>
         </ul>
      </nav>
    </div>
  )
}
export default Navbar