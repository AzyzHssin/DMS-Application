
import React from "react";

class login extends React.Component{
    constructor(props){
        super(props)
    this.state = {};
    }
   
    
    render(){
       return( 
 <div>
  <h3>Login :</h3><br></br>
          <input type="text" name="" id="" placeholder="User Name" /><br></br>
          <input type="password" name="" id="" placeholder="Password" />
   </div>
      )
    }
   
}
export default login