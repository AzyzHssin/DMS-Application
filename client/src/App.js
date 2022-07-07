import "./App.css";
import React from "react";
import WelcomePage from "./Components/WelcomePage";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import SellYourProduct from "./Components/SellYourProduct";
import ProductInfo from "./Components/ProductInfo";
import axios from "axios";
import Signin from "./Components/Signin";
import Login from "./Components/Login";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "welcome",
      productid: null,
      bigdata: [],
      userData: [],
      account: {},
      username: "",
      password: "",
    };
    this.createAccount=this.createAccount.bind(this);
    this.fetchingUser=this.fetchingUser.bind(this);
    this.fetchingProducts = this.fetchingProducts.bind(this);
    this.fetchingUserProduct=this.fetchingUserProduct.bind(this);
    this.addYourProduct= this.addYourProduct.bind(this);
    this.updateProduct=this.updateProduct.bind(this);
    this.deleteProduct=this.deleteProduct.bind(this);
    this.changeView = this.changeView.bind(this);
  }
  componentDidMount() {
    this.fetchingProducts();
  }

  //Signup page:

  createAccount(account) {
    axios.post("http://localhost:3001/users/signin", account).then((result) => {
      console.log("account created successfully");
    });
  }

  //Login page:

  fetchingUser() {
    axios
      .get("http://localhost:3001/users/login", {
        username: this.state.username,
        password: this.state.password,
      })
      .then((result) => {
        this.setState({
          account: result.data,
        });
      });
  }

  fetchingProducts() {
    axios.get("http://localhost:3001/product/get").then((result) => {
      this.setState({
        bigdata: result.data,
      });
      console.log(this.state.bigdata, "big data");
    });
  }
//To add the product that exist in table sell to the user page (Different from the data that exist in table product)
  fetchingUserProduct() {
    axios.get("http://localhost:3001/market/get").then((result)=>{
      this.setState({
        userData: result.data
      });
      console.log(this.state.userData,"this is user data from table sell")
    })
   }
//To let the user sell his market :
  addYourProduct(product) {
    axios.post("http://localhost:3001/market/create", product).then((result)=>{
      console.log("Product has been add")
    })
  }

  //To let the user update his product:
  updateProduct(id) {
    axios.patch("http://localhost:3001/market/update",id).then((result)=>{
      console.log("Market has been updated")
    })
  }

  //To delete a product :
  deleteProduct(id) {
    axios.delete("http://localhost:3001/market/delete",id).then((result)=>{
      console.log("Product has been delete it")
    })
  }

  changeView(view) {
    this.setState({
      view: view,
    });
  }
  renderView() {
    if (this.state.view === "products") {
      return <Products data={this.state.bigdata} />;
    } else if (this.state.view === "SellYourProduct") {
      return <SellYourProduct />;
    } else if (this.state.view === "welcome") {
      return <WelcomePage />;
    } else if (this.state.view === "productinfo") {
      return <ProductInfo id={this.state.productid} />;
    } else if (this.state.view === "signin") {
      return <Signin id={this.state.productid} />;
    }else if(this.state.view === "login") {
      return <Login id={this.state.productid} />;
    }
  }
  render() {
    return (
      <div>
        <Navbar changeView={this.changeView} view={this.state.view} />
        <div className="middle">{this.renderView()}</div>
      </div>
    );
  }
}
export default App;
