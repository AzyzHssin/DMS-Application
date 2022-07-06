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
          <p>please sign in</p>
          <input type="text" name="" id="" placeholder="e-mail" />
          <input type="text" name="" id="" placeholder="password" />
          <br />
          <button> ok</button>
        </form>
      </div>
    );
  }
}
export default Signin;
