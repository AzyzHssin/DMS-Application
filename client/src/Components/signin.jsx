import React from "react";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <form action="">
          <h3>Please sign in</h3>
          <input type="text" name="" id="" placeholder="User Name" /><br></br>
          <input type="password" name="" id="" placeholder="Password" /><br></br>
          <input type="url" name="" id="" placeholder="Avatar" /><br></br>
          <input type="number" name="" id="" placeholder="Wallet" /><br></br>

          <br />
          <button> SignUp</button>
        </form>
      </div>
    );
  }
}
export default Signin;
