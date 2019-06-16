import React, { Component } from "react";
import firebase from "../../config/firebaseConfig";
import { withRouter } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  toHome = () => {
    this.props.history.push("/login");
  };

  logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.toHome();
      });
  };

  render() {
    return (
      <div>
        <h1>Você está na Home</h1>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default withRouter(Home);
