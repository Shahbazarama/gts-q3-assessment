import React from 'react';

let cartStyle = {
  color: 'white',
  padding: '10px'
}

function Cart({ removeFromCart, cartCameras, subtotal, tax, total }) {
    return (
      <div style={{position: 'fixed', backgroundColor: '#ffa000'}}>
        <h2 style={cartStyle}>Your Cart</h2>
        <ul style={{padding: '15px', fontSize: '16px'}}>
          {cartCameras.map(camera => {
            return (
              <>
                <li style={{listStyleType: 'none'}}>{camera.name}</li>
                <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(camera.id)}>delete</button>
              </>
            )
          })}
        </ul>
        <h3 style={cartStyle}>Subtotal: {`$${subtotal.toFixed(2)}`}</h3>
        <h3 style={cartStyle}>Tax: {`$${tax.toFixed(2)}`}</h3>
        <h3 style={cartStyle}><strong>Total: {`$${total.toFixed(2)}`}</strong></h3>
        <button className="btn btn-primary">
          Checkout
        </button>

      </div>
    );
}

export default Cart;
