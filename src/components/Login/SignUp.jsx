import React, { Component } from 'react';
import firebase from '../../config/firebaseConfig';
import Menu from '../Menu/index';


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      name: '',
      email: '',
      setor: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  signup(e) {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
    }).catch((error) => {
      alert(error);
    });
  }


  render() {
    let page = <div className="col-md-6">

      <Menu type="login" />
      <form>
        <div className="form-group">
          <label htmlFor="name">Nome Completo</label>
          <input value={this.state.name} onChange={this.handleChange} type="text" name="name" className="form-control" id="name" placeholder="Digite seu nome" />
        </div>
        <div className="form-group">
          <label htmlFor="Email">Email address</label>
          <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="Email" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="setor">Setor</label>
          <select value={this.state.setor} onChange={this.handleChange} name="setor" className="form-control" id="setor" placeholder="Setor">
            <option value="salão">Salão</option>
            <option value="cozinha">Cozinha</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="Password">Password</label>
          <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="Password" placeholder="Password" />
        </div>
        <button onClick={this.signup} style={{ marginLeft: '25px' }} className="btn btn-success">Cadastrar</button>
      </form >
    </div >
    return page
  }
}

export default SignUp;


