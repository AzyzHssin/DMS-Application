import React from "react";
import Signin from "./Signin";
const Navbar = (props) => (
  <div className="">
    {
      <div id="sidebar">
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
        </nav>
      </div>
    }
  </div>
);

export default Navbar;
