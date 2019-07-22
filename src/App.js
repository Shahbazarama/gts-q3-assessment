import React, { Component } from 'react';
import ShoppingInterface from './components/ShoppingInterface.jsx'

class App extends Component {
  render() {
    return (
    <div>
      <nav className="container" style={{background: 'blue'}}>
        <h2>Camera Shop</h2>
      </nav>
      <div className="container">
        <ShoppingInterface />
      </div>
    </div>
    );
  }
}

export default App;
