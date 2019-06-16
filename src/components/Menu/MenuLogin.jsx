import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <main>
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
    </main>
  );
};
