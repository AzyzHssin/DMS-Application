import React from "react";

class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>welcome in DMS</h2>
        <h3> Digital-Marketing-Studio</h3>
        <p> To buy or to sell your product please Signin and login </p>
        <button className="takesTosignIn" onClick={this.props.changeView("signin")}>Sign In</button>
      </div>
    );
  }
}
export default WelcomePage;
