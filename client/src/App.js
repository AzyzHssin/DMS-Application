
import './App.css';
import React from "react";
import WelcomePage from './Components/WelcomePage';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import SellYourProduct from './Components/SellYourProduct';
import ProductInfo from './Components/ProductInfo';
import axios from "axios"
class App extends React.Component{
    constructor(props){
        super(props)
    this.state = {
      view:"welcome",
      productid:null,
      bigdata:[],
      account:{},
      username:"",
      password:""
    };
    this.fetchingProducts = this.fetchingProducts.bind(this)
    this.changeView = this.changeView.bind(this)

    
    
    }
    componentDidMount(){
      this.fetchingProducts()
    }
    createAccount(account){
      axios.post("http://localhost:3001/users/signin",account).then(result=>{
        
        console.log("account created successfully")
        
    })
    }
    fetchingUser(){
      axios.get("http://localhost:3001/users/login",{username:this.state.username,password:this.state.password}).then(result=>{
        
        this.setState({
            account:result.data
        })
        
    })
    }
    fetchingProducts(){
      axios.get("http://localhost:3001/product/get").then((result)=>{
        
        this.setState({
          bigdata:result.data
        })
      
        console.log(this.state.bigdata,"big data")
    })
    }

    changeView(view){
      this.setState({
        view:view
      })
    }
   renderView(){
    if(this.state.view==="products"){
      return(
        <Products data={this.state.bigdata}/>
      )
   }
   else if(this.state.view==="SellYourProduct"){
      return(
        <SellYourProduct />
      )
   }
   else if(this.state.view==="welcome"){
    return(
      <WelcomePage />
    )
 }
 else if(this.state.view==="productinfo"){
  return(
    <ProductInfo id={this.state.productid}/>
  )
}
  }
    render(){
       return( 
        <div>
        <Navbar changeView={this.changeView}/>
        <div className='middle'>
          {this.renderView()}

        </div>
        </div>
      )
    }
   
}
export default App