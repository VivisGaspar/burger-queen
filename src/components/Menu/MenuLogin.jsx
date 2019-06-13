import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Cadastro from '../Login/SignUp';

export default () => {
  return (
    <Router>
      <main>
        <ul className="nav nav-tabs">
          <li className="nav-item"><Link className="nav-link" to='/Login'>Login</Link></li>
          <li className="nav-item"><Link className="nav-link" to='/Cadastro'>Cadastro</Link></li>
        </ul>
      </main>
      <div className="App">
        {/* <Route exact path='/' component={Home} /> */}
        <Route exact path='/Login' component={Login} />
        <Route exact path='/Cadastro' component={Cadastro} />
      </div>
    </Router>
  );
}
