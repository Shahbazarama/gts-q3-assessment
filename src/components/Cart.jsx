import React, { Component } from 'react';

class Cart extends Component {
  render() {
    return (
      <div>
        <h2>Your Cart</h2>
        <ul>
          <li>Nikon</li>
          <li>Canon</li>
        </ul>
        <h3>Subtotal: 0.00</h3>
        <h3>Tax: 0.00</h3>
        <h3><strong>Total: 0.00</strong></h3>
        <button>
          Checkout
        </button>

      </div>
    );
  }
}

export default Cart;
