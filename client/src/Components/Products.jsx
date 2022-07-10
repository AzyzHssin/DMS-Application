import React from "react";
import OneProduct from "./OneProduct";
class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
       <div id="viewport">
  
  <div id="sidebarleft">
    <header>
      <a href="#">Navigation</a>
    </header>
    <ul class="nav">
    
    <div
            className={
              this.props.view === "products" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => this.props.changeView("products")}
          >
            Products
          </div>
          <div
            className={
              this.props.view === "SellYourProduct"
                ? "nav-selected"
                : "nav-unselected"
            }
            onClick={() => this.props.changeView("SellYourProduct")}
          >
            Sell Your Product
          </div>
     
     
    </ul>
  </div>
  
  
</div>
        <br />
        {this.props.data.map((element) => {
          let key = element.id;
          return (
            <div>
              <OneProduct deleteProduct={this.props.deleteProduct} info={element} accountId={this.props.accountId} key={key} />
              <br />
            </div>
          );
        })}
      </div>
    );
  }
}
export default Products;
