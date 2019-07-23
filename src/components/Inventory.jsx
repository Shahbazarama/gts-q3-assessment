import React from 'react';

function Inventory({ filterInventory, addToCart, allCameras }) {



  function ratingCounter(starCount) {
    let returnString = ''
    for(let i = 0; i < starCount; i++){
      returnString += '*'
    }
    return returnString
  }

  return (
    <>
    <div style={{padding: '15px'}}>
      <input onChange={(e) => filterInventory(e.target.value)} className="form-control" placeholder="Filter what you're looking for here..." style={{width: "100%"}}/>
    </div>

    {allCameras.map(camera => {
      return (
        <div>
          <h2>Camera Name: {camera.name}</h2>
          <img src={`${camera.picture}`} alt='camera' style={{width: "150px", height: "150px"}}/>
          <h4>Price: ${camera.price} {camera.onSale ? <strong style={{color: 'red'}}>on sale!</strong> : null}</h4>
          <p>Rating:
            {ratingCounter(camera.rating)}
          </p>
          <button className="btn btn-primary" onClick={() => addToCart(camera.id)}>Add to Cart</button>
        </div>
      )

    } )}

  </>
);
}

export default Inventory;
