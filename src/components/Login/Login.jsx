import React, { Component } from 'react';
import firebase from '../../config/firebaseConfig';
import Menu from '../Menu/index';



class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
    }).catch((error) => {
      alert(error);
    });
  }

  render() {
    let page = <div className="col-md-6">
      <form>
        <div className="form-group">
           <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="email" placeholder="E-mail" /> 
        </div>
        <div className="form-group">
          <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="password" placeholder="Senha" />
        </div>
          <button type="submit" onClick={this.login} className="btn btn-primary">Entrar</button>
      </form>
    </div>
    return page
  }
}

export default Login;

