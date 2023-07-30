import React from "react";
import './navbar.css'
import image from "../../Assets/ANIK.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div>
<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <div className="container-fluid">
    <img src={image} alt="" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <div className="navlink">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link to="/">Home</Link>
        
        </li>
        <li className="nav-item">
          <a className="nav-link">Menu</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Order</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"> Contact</a>
        </li>
        <li className="nav-item login">
         <Link to="/login">Login</Link>
        </li>
      </ul>
      </div>

        <button className="btn btn-primary" type="button">Sign Up</button>
   
    </div>
  </div>
</nav>






        </div>
    )
}

export default Navbar;