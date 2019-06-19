import React from "react";

const menuItens = [
  {
    title: "hambúrguer simples",
    price: 10
  },
  {
    title: "hambúrguer duplo",
    price: 15
  },
  {
    title: "batata frita",
    price: 5
  },
  {
    title: "anéis de cebola",
    price: 5
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

class HomeItensNight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      purchase: []
    };
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
      <div>
        {menuItens.map((menuItens, i) => {
          return (
            <button key={i} onClick={() => this.purchaseClick(menuItens)}>
              {menuItens.title}
            </button>
          );
        })}
        <hr />
        <h1>Itens Comprados</h1>
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
        <h1>Total</h1>
        <p>Valor total:{valueTotal}</p>
      </div>
    );
  }
}

export default HomeItensNight;
