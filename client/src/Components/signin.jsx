

import React from "react";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wallet:0
    };
    this.handleChangeUser = this.handleChangeUser.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleChangeAvatar = this.handleChangeAvatar.bind(this)
    this.handleChangeTel = this.handleChangeTel.bind(this)
  }
  
  handleChangeUser(event){
    this.setState({[event.target.id] : event.target.value});
    
    console.log(this.state)
}
handleChangePassword(event){
  this.setState({[event.target.id] : event.target.value});
  
  console.log(this.state)
}
handleChangeAvatar(event){
  this.setState({[event.target.id] : event.target.value});
  
  console.log(this.state)
}
handleChangeTel(event){
  this.setState({[event.target.id] : event.target.value});
  
  console.log(this.state)
}

  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <div id="container">
        <form action="">
          <h3>Please sign in</h3>
          <input type="text" name="" id="username" placeholder="User Name" onChange={this.handleChangeUser}/><br></br>
          <input type="password" name="" id="password" placeholder="Password" onChange={this.handleChangePassword}/><br></br>
          <input type="url" name="" id="avatar" placeholder="Avatar" onChange={this.handleChangeAvatar}/><br></br>
          <input type="number" name="" id="tel" placeholder="Tel" onChange={this.handleChangeTel}/><br></br>
          <br />
          <button id="signin" onClick={()=>{this.props.createAccount({"username":this.state.username,
        "password":this.state.password,"avatar":this.state.avatar,"wallet":0,"tel":this.state.tel} );this.props.changeView("created")}}> SignUp</button>
        </form>
        </div>
      </div>
    );
  }
}
export default Signin;
