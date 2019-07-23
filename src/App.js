import React, { Component } from 'react';
import ShoppingInterface from './components/ShoppingInterface.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar nav" style={{background: '#2196f3'}}>
          <div className="container">
            <h2>Camera Shop</h2>
          </div>

        </nav>
        <div className="container">
          <ShoppingInterface />
        </div>
      </div>
    );
  }
}

export default App;
