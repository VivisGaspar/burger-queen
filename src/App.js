import React from "react";
import firebase from "./config/firebaseConfig";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Menu from "./components/Menu/MenuLogin";
import Cadastro from "./components/Login/SignUp";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <BrowserRouter>
          <div className="container">
            {!this.state.user && <Menu type="login" />}
            <Route exact path="/" component={this.state.user ? Home : Login} />
            <Route exact path="/login" component={this.state.user ? Home : Login} />
            <Route exact path="/cadastro" component={this.state.user ? Home : Cadastro} />
            <Route exact path="/home" component={this.state.user ? Home : Login} />
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
