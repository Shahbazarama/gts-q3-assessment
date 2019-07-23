import React, { Component } from 'react';
import Inventory from './Inventory.jsx'
import Cart from './Cart.jsx'

class ShoppingInterface extends Component {
  state = {
    cameras: [],
    cartCameras: [],
    savedInventory: []
  }

  componentDidMount = async () => {
    const res = await fetch('http://localhost:8000/cameras')
    const json = await res.json()
    this.setState({
      cameras: json.map(camera => {
        return {
          ...camera
        }
      }),
      cartCameras: json.filter(camera => camera.inCart === true),
      savedInventory: json.map(camera => {
        return {
          ...camera
        }
      })
    })
  }

  addToCart = async (id) => {
    let url = `http://localhost:8000/cameras/${id}`
    const res = await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify({inCart: true}),
      headers: {'Content-Type': 'application/json'}
    })

    if(res.ok){
      if(!(this.state.cartCameras.some(camera => camera.id === id))){
        let newCart = this.state.cartCameras
        newCart.push(this.state.cameras.filter(camera => camera.id === id).pop())
        this.setState({
          cartCameras: newCart.map(camera => {
            return {
              ...camera
            }
          })
        })
      }
    }
  }

  removeFromCart = async (id) => {
    let url = `http://localhost:8000/cameras/${id}`
    const res = await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify({inCart: false}),
      headers: {'Content-Type': 'application/json'}
    })

    if(res.ok){
      this.setState(prevState => ({
        cartCameras: prevState.cartCameras.filter(camera => camera.id !== id)
      }))
    }
  }

  filterInventory = (value) => {
    let allInventory = this.state.savedInventory
    let searchedInventory = allInventory.filter(camera => camera.name.toLowerCase().includes(value) === true)
    this.setState({
      cameras: searchedInventory
    })
  }

  render() {
    let subtotal = 0
    let tax = 0
    let total = 0
    if(this.state.cartCameras.length !== 0) {
      subtotal = this.state.cartCameras.reduce(( accumulator, camera ) =>
      accumulator + camera.price, 0);
      tax = subtotal * .086
      total = tax + subtotal
    } else {
      subtotal = 0
      tax = 0
      total = 0
    }

    return (
      <div className="row">
        <div className="col-7">
          <Inventory
            filterInventory={this.filterInventory}
            addToCart={this.addToCart}
            allCameras={this.state.cameras}
          />
        </div>
        <div className="col-5">
          <Cart
            removeFromCart={this.removeFromCart}
            cartCameras={this.state.cartCameras}
            subtotal={subtotal}
            tax={tax}
            total={total}
          />
        </div>
      </div>
    );
  }
}

export default ShoppingInterface;
