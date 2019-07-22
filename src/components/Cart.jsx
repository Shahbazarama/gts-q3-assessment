import React, { Component } from 'react';

class Cart extends Component {

  render() {
    const subtotal = this.props.cartCameras.reduce(( accumulator, camera ) =>
      accumulator + camera.price, 0);
    const tax = subtotal * .086
    const total = tax + subtotal
    return (
      <div>
        <h2>Your Cart</h2>
        <ul>
          {this.props.cartCameras.map(camera => {
            return (
                <li>{camera.name}</li>
            )
          })}
        </ul>
        <h3>Subtotal: {subtotal}</h3>
        <h3>Tax: {tax}</h3>
        <h3><strong>Total: {total}</strong></h3>
        <button className="btn btn-primary">
          Checkout
        </button>

      </div>
    );
  }
}

export default Cart;
