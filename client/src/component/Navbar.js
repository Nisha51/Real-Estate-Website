import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
      <nav className="navbar">
        <h1><Link to="/Home">The Happy Abode</Link></h1>
        <div className="links">
          <Link to="/Contact">Contact</Link>
          <Link to="/Create" style={{ 
            color: 'white', 
            backgroundColor: '#8d35f1',
            borderRadius: '8px' 
          }}>New Listing</Link>
        </div>
      </nav>
    );
  }
   
  export default Navbar;