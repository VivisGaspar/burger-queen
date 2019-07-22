import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const menuItens = [
  {
    title: "café americano",
    price: 5
  },
  {
    title: "café com leite",
    price: 7
  },
  {
    title: "sanduíche de presunto e queijo",
    price: 10
  },
  {
    title: "suco natural de fruta",
    price: 7
  },
  {
    title: "água 500ml",
    price: 5
  },
  {
    title: "água 750ml",
    price: 7
  },
  {
    title: "bebida gaseificada 500ml",
    price: 7
  },
  {
    title: "bebida gaseificada 750ml",
    price: 10
  }
];

class HomeItensSun extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      clientName: "",
      purchase: []
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  purchaseClick = item => {
    const itemIndex = this.state.purchase.findIndex(menuItens => {
      return menuItens.title === item.title;
    });
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        amount: 1
      };
      this.setState({
        purchase: this.state.purchase.concat(newItem)
      });
    } else {
      let newPurchase = this.state.purchase;
      newPurchase[itemIndex].amount += 1;
      this.setState({
        purchase: newPurchase
      });
    }
  };

  deleteItem = item => {
    const itemIndex = this.state.purchase.findIndex(menuItens => {
      return menuItens.title === item.title;
    });
    let newPurchase = this.state.purchase;
    newPurchase[itemIndex].amount -= 1;

    const amountDelete = newPurchase[itemIndex].amount;

    if (amountDelete > 0) {
      this.setState({
        purchase: newPurchase
      });
    } else {
      newPurchase.splice(itemIndex, 1);
      this.setState({
        purchase: newPurchase
      });
    }
  };

  render() {
    const valueTotal = this.state.purchase.reduce((acc, cur) => {
      return acc + cur.amount * cur.price;
    }, 0);
    return (
      <React.Fragment>
        <Row>
          <Col md="12" lg="12">
            <div className="form-group">
              <input
                value={this.state.clientName}
                onChange={this.handleChange}
                type="text"
                name="clientName"
                className="form-control"
                id="clientName"
                placeholder="Nome do Cliente"
              />
            </div>
          </Col>
        </Row>

        <Row>
          <Col md="6" lg="6">
            {menuItens.map((menuItens, i) => {
              return (
                <div className="btn-itens">
                  <button className="btn-margin mt-3" key={i} onClick={() => this.purchaseClick(menuItens)}>
                    {menuItens.title}
                  </button>
                </div>
              );
            })}
          </Col>
          <hr />
          <Col md="6" lg="6">
            <h1 className="font-text">Itens Comprados</h1>
            {this.state.purchase.map((menuItens, i) => {
              return (
                <div key={i}>
                  <p>
                    {menuItens.title} - {menuItens.price * menuItens.amount} - {menuItens.amount}
                  </p>
                  <button onClick={() => this.deleteItem(menuItens)}>Excluir</button>
                </div>
              );
            })}
            <hr />
            <h1 className="font-text">Total</h1>
            <p className="font-text">Valor total:{valueTotal}</p>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default HomeItensSun;
