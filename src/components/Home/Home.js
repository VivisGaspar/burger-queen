import React, { Component } from "react";
import firebase from "../../config/firebaseConfig";
import { withRouter } from "react-router-dom";
import MenuItensNight from "../Menu/MenuItensNight";
import MenuItensSun from "../Menu/MenuItensSun";

class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.getCurrenteUser = this.getCurrenteUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      clientName: "",
      period: "period"
    };
  }

  toHome = () => {
    this.props.history.push("/login");
  };

  getCurrenteUser() {
    return firebase.auth().currentUser;
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.toHome();
      });
  };

  render() {
    let choicePeriod = (
      <div className="form-group">
        <select
          value={this.state.period}
          onChange={this.handleChange}
          name="period"
          className="form-control"
          id="period"
          placeholder="period"
        >
          <option value="period">Escolha o Período</option>
          <option value="manha">Manhã</option>
          <option value="noite">Noite</option>
        </select>
      </div>
    );
    let user = this.getCurrenteUser();
    var name = "";
    var setor = "";
    if (user != null) {
      name = user.displayName;
      setor = user.photoURL;
    }
    return (
      <div>
        <h1 className="font-text">Bem vindo(a)! {name},</h1>
        <h2 className="font-text">Você está no setor {setor === "salao" ? "Salão" : "Cozinha"}</h2>
        {setor === "salao" ? choicePeriod : ""}
        <div className="font-text">
          {this.state.period === "manha" && setor === "salao" ? <MenuItensSun /> : ""}
          {this.state.period === "noite" && setor === "salao" ? <MenuItensNight /> : ""}
          {this.state.period === "period" && setor === "salao"
            ? "Você precisa selecionar um período para continuar."
            : ""}
        </div>
        <button onClick={this.logout} className="btn btn-padrao">
          Sair
        </button>
      </div>
    );
  }
}

export default withRouter(Home);
