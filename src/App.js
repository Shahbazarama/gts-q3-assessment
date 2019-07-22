import React, { Component } from 'react';
import ShoppingInterface from './components/ShoppingInterface.jsx'

class App extends Component {

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
    return (
    <div>
      <nav className="container" style={{background: 'blue'}}>
        <h2>Camera Shop</h2>
      </nav>
      <div className="container">
        <ShoppingInterface allCameras={this.state.cameras}/>
      </div>
    </div>
    );
  }
}

export default App;
