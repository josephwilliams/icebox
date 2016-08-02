import React from 'react';

class SmallBreweryItem extends React.Component {
  constructor(props, context){
    super(props);
    context.router
  }

  linkBrewery (id) {
    var breweryLink = "breweries/" + id.toString();
    return () => {this.context.router.push(breweryLink)}
  }

  render () {
    return (
      <div className="small-brewery-item"
           onClick={this.linkBrewery(this.props.id)}>
        <div className="small-brewery-item-content">
          <div className="image">
            <img src={this.props.logoUrl}></img>
          </div>
          <div className="name">
            {this.props.name}
          </div>
          <div className="location">
            {this.props.location}
          </div>
        </div>
      </div>
    )
  }
}

SmallBreweryItem.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default SmallBreweryItem;
