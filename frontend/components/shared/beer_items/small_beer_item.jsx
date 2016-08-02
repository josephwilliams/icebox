import React from 'react';

class SmallBeerItem extends React.Component {
  constructor(props, context){
    super(props);
    context.router
  }

  linkBeer (id) {
    var beerLink = "beers/" + id.toString();
    return () => {this.context.router.push(beerLink)}
  }

  render () {
    return (
      <div className="small-beer-item"
           onClick={this.linkBeer(this.props.id)}>
        <div className="small-beer-item-content">
          <div className="image">
            <img src="images/beerglass.png"></img>
          </div>
          <div className="name">
            {this.props.name}
          </div>
          <div className="brewery">
            {this.props.brewery}
          </div>
          <div className="attribute">
            {this.props.style}
          </div>
          <div className="attribute">
            ABV: {this.props.abv}%
          </div>
        </div>
      </div>
    )
  }
}

SmallBeerItem.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default SmallBeerItem;
