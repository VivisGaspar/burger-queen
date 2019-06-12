import React from 'react';
import firebase from './config/firebaseConfig';
import Home from './components/Home/Home';
import Login from './components/Login/index';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Menu from './components/menu';
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
      <div className="App">
        {this.state.user ? (<Home />) : (<Login />)}
        {/* {<Menu />} */}
      </div>
    );
  }
}


export default App;
