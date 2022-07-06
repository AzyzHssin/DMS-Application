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
        <br />
        {this.props.data.map((element) => {
          let key = element.id;
          return (
            <div>
              <OneProduct info={element} key={key} />
              <br />
            </div>
          );
        })}
      </div>
    );
  }
}
export default Products;
