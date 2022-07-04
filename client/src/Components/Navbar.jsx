
import React from "react";

const Navbar = (props) => (
  <div className="">
    { 
    <div id="sidebar">
 
    <ul className="nav">
      <li onClick={()=>props.changeView("products")}>Products</li>
      <li onClick={()=>props.changeView("SellYourProduct")}>Sell Your Product</li>
      
      
      
      
      
      
    
    </ul>
  </div>

    }
    

  </div>
);

export default Navbar;

