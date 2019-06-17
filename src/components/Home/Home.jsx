import React, { Component } from "react";
import firebase from "../../config/firebaseConfig";
import { withRouter } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.getCurrenteUser = this.getCurrenteUser.bind(this);
  }

  toHome = () => {
    this.props.history.push("/login");
  };

  getCurrenteUser() {
    return firebase.auth().currentUser;
  }

  logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.toHome();
      });
  };

  render() {
    let user = this.getCurrenteUser();
    var name = "";
    var setor = "";
    if (user != null) {
      name = user.displayName;
      setor = user.photoURL;
    }
    return (
      <div>
        <h1>Bem vindo(a), {name}</h1>
        <h2>Você está {setor}</h2>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default withRouter(Home);
