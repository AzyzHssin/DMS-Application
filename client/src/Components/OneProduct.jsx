import React from "react";

const OneProduct = (props) => (
  <div className="ProductContainer">
    <div className="deleteProduct" onClick={()=>{console.log(props.info.id,props.accountId);props.deleteProduct(props.info.id,props.accountId)}}></div>
    <h2 className="Title">{props.info.title} for sale</h2>
    <img
      className="image"
      alt="img"
      src={props.info.image_url}
      width={300}
      height={300}
    />
    
    <p className="price">{props.info.price}</p>
    <p className="description">{props.info.description}</p>
    <p className="quantite">{props.info.quantite} Item in stock</p>
    <p className="tel">{props.info.tel}</p>
    
  </div>
);

export default OneProduct;
