import React from "react";
import "./navbar.css";
import image from "../../Assets/ANIK.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
        <div className="container-fluid">
          <img src={image} alt="" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <div className="navlink">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/menu">Menu</Link>
                </li>
                <li className="nav-item">
                  <Link to="/order">Order</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <Link to="/login">
            <button className="btn btn-primary btn-login" type="button">
              Login
            </button>
            </Link>
           <Link to="/signup">
           <button className="btn btn-primary" type="button">
              Sign Up
            </button>
           </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
