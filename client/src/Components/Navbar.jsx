import React from "react";
import logo from "../unnamed.png"
const Navbar = (props) => (
  <div className="">
    {<div>
      
      <div id="sidebar">
      <div className="logo">
            <img src={logo} alt="eroor" />
          </div>
        <nav className="nav">
        
          <div
            className={
              props.view === "products" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => props.changeView("products")}
          >
            Products
          </div>
          <div
            className={
              props.view === "SellYourProduct"
                ? "nav-selected"
                : "nav-unselected"
            }
            onClick={() => props.changeView("SellYourProduct")}
          >
            Sell Your Product
          </div>
          <div
            className={
              props.view === "signin" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => props.changeView("signin")}
          >
            sign In
          </div>
          <div
            className={
              props.view === "login" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => props.changeView("login")}
          id="login-btn">
            Login
          </div>
        </nav>
      </div>
      </div>
    }
  </div>
  
);

export default Navbar;