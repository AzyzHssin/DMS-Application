
import React from "react";

class login extends React.Component{
    constructor(props){
        super(props)
    this.state = {
        accessAllowed:false
    };
    this.handleChangeUser = this.handleChangeUser.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    }
    handleChangeUser(event){
        this.setState({[event.target.id] : event.target.value});
        
        console.log(this.state)
    }
    handleChangePassword(event){
      this.setState({[event.target.id] : event.target.value});
      
      console.log(this.state)
    }
    
    render(){
       return( 
 <div>
  <h3>Login :</h3><br></br>
          <input type="text" name="" id="username" placeholder="User Name" onChange={this.handleChangeUser}/><br></br>
          <input type="password" name="" id="password" placeholder="Password" onChange={this.handleChangePassword}/>
          <button className="ok" onClick={()=>{this.props.fetchingUser(this.state.username,this.state.password)}}>Ok</button>
          
   </div>
      )
    }
   
}
export default login