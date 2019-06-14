import React, { Component } from 'react';
import firebase from '../../config/firebaseConfig';
import Menu from '../Menu/index';

class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    firebase.auth().signOut();
  }

  render() {
    return (
      <div>
        <h1>Você está na Home</h1>
        <button onClick={this.logout}>Logout</button>
      </div>
    )
  }
}

export default Home;