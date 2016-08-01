import React from 'react';

const SmallBeerItem = (props) => {
  return (
    <div className="small-beer-item">
      <div className="small-beer-item-content">
        <div className="image">
          <img src="images/beerglass.png"></img>
        </div>
        <div className="name">
          {props.name}
        </div>
        <div className="brewery">
          {props.brewery}
        </div>
        <div className="attribute">
          {props.style}
        </div>
        <div className="attribute">
          ABV: {props.abv}
        </div>
      </div>
    </div>
  )
};

export default SmallBeerItem;
