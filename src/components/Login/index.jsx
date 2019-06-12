import React, { Component } from 'react';
import firebase from '../../config/firebaseConfig';
import Menu from '../Menu/index';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
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
  signup(e) {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
    }).catch((error) => {
      alert(error);
    });
  }


  render() {
    let page = <div className="col-md-6">
      <div>
        <header className="background-image">
          <p>Aqui é o header com a imagem</p>
          <p>BURGUER QUEEN</p>
        </header>
      </div>
      <Menu type="login" />
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        {window.location.pathname === '/cadastro' ?
          <button onClick={this.signup} style={{ marginLeft: '25px' }} className="btn btn-success">Cadastrar</button> :
          <button type="submit" onClick={this.login} className="btn btn-primary">Entrar</button>}
      </form>
    </div>
    return page
  }
}

export default Login;


// // render() {
// //   return (
// //     <div className="col-md-6">
// <form>
//   <div className="form-group">
//     <label htmlFor="exampleInputEmail1">Email address</label>
//     <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
//     <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
//   </div>
//   <div className="form-group">
//     <label htmlFor="exampleInputPassword1">Password</label>
//     <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
//   </div>
//   <button type="submit" onClick={this.login} className="btn btn-primary">Login</button>
//   <button onClick={this.signup} style={{ marginLeft: '25px' }} className="btn btn-success">Signup</button>
// </form>
// //     </div>
// //   );
// // }