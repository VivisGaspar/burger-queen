import React from "react";
import './Menu.css';
import MenuApp from './MenuApp';
import MenuLogin from './MenuLogin';

export default (props) => {
  return props.type === 'login' ? <MenuLogin /> : <MenuApp />
}

