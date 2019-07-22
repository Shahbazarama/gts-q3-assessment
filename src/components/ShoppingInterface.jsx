import React, { Component } from 'react';
import Inventory from './Inventory.jsx'
import Cart from './Cart.jsx'

class ShoppingInterface extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-7">
          <Inventory allCameras={this.props.allCameras}/>
        </div>
        <div className="col-5">
          <Cart />
        </div>
      </div>
    );
  }
}

export default ShoppingInterface;
