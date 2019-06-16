import React, { Component } from "react";
import firebase from "../../config/firebaseConfig";
import { withRouter } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClick = () => {
    this.props.history.push("/home");
  };

  login(e) {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {
        this.handleClick();
      })
      .catch(error => {
        alert(error);
      });
  }

  render() {
    let page = (
      <form className="form-wrapper">
        <div className="form-group">
          <input
            value={this.state.email}
            onChange={this.handleChange}
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="E-mail"
          />
        </div>
        <div className="form-group">
          <input
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
            name="password"
            className="form-control"
            id="password"
            placeholder="Senha"
          />
        </div>
        <button type="submit" onClick={this.login} className="btn btn-primary">
          Entrar
        </button>
      </form>
    );
    return page;
  }
}

export default withRouter(Login);
