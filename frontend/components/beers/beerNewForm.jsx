import React from 'react';
import FontAwesome from 'react-fontawesome';
import { addBeer, fetchBeers } from '../../actions/beerActions';

class BeerNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "", brewery: "", style: "", ABV: 0
    };
  }

  updateValue (attribute) {
    return e => this.setState({ [attribute]: e.target.value });
  }

  handleSubmit () {
      var beerData = { beer: {
        name: this.state.name,
        brewery: this.state.brewery,
        style: this.state.style,
        abv: this.state.ABV
      }
    };

    this.props.addBeer(beerData);
    this.setState({ name: "", brewery: "", style: "", ABV: 0 });
  }

  render () {
    return (
      <div className="beer-new-container">
        <div className="beer-form-container">
          <form onSubmit={this.handleSubmit.bind(this)} id="beerAddForm">
            <label className="label">Name</label>
            <input type="text"
              value={this.state.name}
              onChange={this.updateValue('name')}
              placeholder={"name"}/>
            <label className="label">Brewery</label>
            <input type="text"
              value={this.state.brewery}
              onChange={this.updateValue('brewery')}
              placeholder={"brewery"} />
            <label className="label">Type</label>
            <input type="text"
              value={this.state.style}
              onChange={this.updateValue('style')}
              placeholder={"style"} />
            <label className="label">ABV (%)</label>
            <input type="text"
              value={this.state.ABV}
              onChange={this.updateValue('ABV')}
              placeholder={0} />
            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default BeerNew;
