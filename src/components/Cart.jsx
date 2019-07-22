import React from 'react';

function Cart({ removeFromCart, cartCameras, subtotal, tax, total }) {
    return (
      <div>
        <h2>Your Cart</h2>
        <ul>
          {cartCameras.map(camera => {
            return (
              <>
                <li style={{'listStyleType': 'none'}}>{camera.name}</li>
                <button onClick={() => removeFromCart(camera.id)}>delete</button>
              </>
            )
          })}
        </ul>
        <h3>Subtotal: {`$${subtotal.toFixed(2)}`}</h3>
        <h3>Tax: {`$${tax.toFixed(2)}`}</h3>
        <h3><strong>Total: {`$${total.toFixed(2)}`}</strong></h3>
        <button className="btn btn-primary">
          Checkout
        </button>

      </div>
    );
}

export default Cart;
