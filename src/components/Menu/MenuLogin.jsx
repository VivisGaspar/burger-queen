import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

export default () => {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/cadastro">
          Cadastro
        </Link>
      </li>
    </ul>
  );
};
