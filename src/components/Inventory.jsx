import React, { Component } from 'react';

class Inventory extends Component {


  ratingCounter(starCount) {
    let returnString = ''
    for(let i = 0; i < starCount; i++){
      returnString += '*'
    }
    return returnString
  }
  render() {
    return (
      <>
      <div>
        <input placeholder="Filter what you're looking for here..." style={{width: "100%"}}/>
      </div>

        {this.props.allCameras.map(camera => {
          return (
            <div>
            <h2>Camera Name: {camera.name}</h2>
            <img src={`${camera.picture}`} alt='camera' style={{width: "100px", height: "100px"}}/>
            <h4>Price: ${camera.price}</h4>
            <p>Rating:
            {this.ratingCounter(camera.rating)}
            </p>
            <button className="btn btn-primary">Add to Cart</button>
            </div>
          )

        } )}

    </>
  );
}
}

export default Inventory;
