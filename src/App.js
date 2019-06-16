import React from 'react';
import firebase from './config/firebaseConfig';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Menu from './components/Menu/index';
import Cadastro from './components/Login/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

const database = firebase.firestore();


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    this.authListener();
  }


  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="sans-serif">
          {this.state.user ? (<Menu type="app" />) : (<Menu type="login" />)}
          <Route exact path='/' component={this.state.user ? Home : Login} />
          <Route exact path='/login' component={this.state.user ? Home : Login} />
          <Route exact path='/cadastro' component={this.state.user ? Home : Cadastro} />
          <Route exact path='/home' component={this.state.user ? Home : Login} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
