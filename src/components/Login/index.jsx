import React from 'react';
import SignUp from './SignUp';
import Login from './Login';


export default () => {
  return window.location.pathname === "/cadastro" ? <SignUp /> : <Login />
}

