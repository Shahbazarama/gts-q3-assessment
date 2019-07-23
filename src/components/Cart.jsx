import React from 'react';

let cartStyle = {
  color: 'white',
  padding: '10px'
}

function Cart({ removeFromCart, cartCameras, subtotal, tax, total }) {
  return (
    <div style={{borderRadius: '15px 15px 15px 15px', backgroundColor: '#ffa000'}}>
      <h2 style={cartStyle}>Your Cart</h2>
      <ul style={{padding: '15px', fontSize: '16px'}}>
        {cartCameras.map(camera => {
          return (
            <>
            <div className="row">
              <div className="col-8">
                <li style={{listStyleType: 'none', fontSize: '20px'}}>{camera.name}
                </li>
              </div>
              <div className="col-4">
                <button className="btn btn-sm btn-danger float-right" onClick={() => removeFromCart(camera.id)}>delete</button>
              </div>
            </div>
          <hr />
          </>
          )
        })}
      </ul>
      <h3 style={cartStyle}>Subtotal: {`$${subtotal.toFixed(2)}`}</h3>
      <h3 style={cartStyle}>Tax: {`$${tax.toFixed(2)}`}</h3>
      <h3 style={cartStyle}><strong>Total: {`$${total.toFixed(2)}`}</strong></h3>
      <button style={{marginBottom: '25px', padding: '15px', width: '100%'}} className="btn btn-primary">
        Checkout
      </button>
    </div>
  );
}

export default Cart;
