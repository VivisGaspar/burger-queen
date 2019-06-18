import React, { Component } from "react";
import firebase from "../../config/firebaseConfig";
import { withRouter } from "react-router-dom";
import HomeItens from "../Menu/HomeItens";

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
        <h1 className="font-text">Bem vindo(a)! {name},</h1>
        <h2 className="font-text">Você está no setor {setor}</h2>
        <div>
          <HomeItens />
        </div>
        <button onClick={this.logout} className="btn btn-primary">
          Sair
        </button>
      </div>
    );
  }
}

export default withRouter(Home);
