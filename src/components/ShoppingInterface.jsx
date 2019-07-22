import React, { Component } from 'react';
import Inventory from './Inventory.jsx'
import Cart from './Cart.jsx'

class ShoppingInterface extends Component {
  state = {
    cameras: []
  }

  componentDidMount = async () => {
    const res = await fetch('http://localhost:8000/cameras')
    const json = await res.json()
    this.setState({
      cameras: json.map(camera => {
        return {
          ...camera
        }
      })
    })
  }

  render() {
    const cartCameras = this.state.cameras.filter(camera => camera.inCart === true)
    return (
      <div className="row">
        <div className="col-7">
          <Inventory allCameras={this.state.cameras}/>
        </div>
        <div className="col-5">
          <Cart cartCameras={cartCameras} />
        </div>
      </div>
    );
  }
}

export default ShoppingInterface;
