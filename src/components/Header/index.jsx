import React from 'react';
import Images from './images/header.jpg';

export default () => {
  return (
    <div className="background-image">
      <header className="App-header">
        <img src={Images} className="App-background" alt="imagem header" />
        <p>BURGUER QUEEN</p>
      </header>
    </div>
  );
}

