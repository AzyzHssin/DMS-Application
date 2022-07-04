import React from "react";

const OneProduct = (props) => (
    
    <div className="ProductContainer">
      <h2 className="Title">{props.data.title} for sale</h2>
      <img className="image" src={props.data.image_url}/>
      <p className="price">{props.data.price}$</p>
      <p className="description">{props.data.description}</p>
       <p className="quantite">{props.data.quantite}</p> 
</div>
);

export default OneProduct;