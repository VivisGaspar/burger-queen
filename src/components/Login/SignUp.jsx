import React, { Component } from "react";
import firebase from "../../config/firebaseConfig";
import { withRouter } from "react-router-dom";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      name: "",
      email: "",
      setor: "",
      password: ""
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClick = () => {
    this.props.history.push("/home");
  };

  signup(e) {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {
        this.handleClick();
        firebase
          .auth()
          .currentUser.updateProfile({
            displayName: this.state.name,
            photoURL: this.state.setor,
            setor: this.state.setor
          })
          .then(
            function() {},
            function(error) {
              alert("Opa dei erro na atualização do perfil,mas o perfil pode ser atualizado manualmente");
            }
          );
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
            value={this.state.name}
            onChange={this.handleChange}
            type="text"
            name="name"
            className="form-control"
            id="name"
            placeholder="Nome completo"
          />
        </div>
        <div className="form-group">
          <input
            value={this.state.email}
            onChange={this.handleChange}
            type="email"
            name="email"
            className="form-control"
            id="Email"
            placeholder="E-mail válido"
          />
        </div>
        <div className="form-group">
          <select
            value={this.state.setor}
            onChange={this.handleChange}
            name="setor"
            className="form-control"
            id="setor"
            placeholder="Setor"
          >
            <option value="setor">Escolha seu setor</option>
            <option value="salao">Salão</option>
            <option value="cozinha">Cozinha</option>
          </select>
        </div>
        <div className="form-group">
          <input
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
            name="password"
            className="form-control"
            id="Password"
            placeholder="Senha (mínimo 6 dígitos)"
          />
        </div>
        <button onClick={this.signup} className="btn btn-primary">
          Cadastrar
        </button>
      </form>
    );
    return page;
  }
}

export default withRouter(SignUp);
