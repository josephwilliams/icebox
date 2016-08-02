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

  updateName (e) {
    this.setState({ name: e.target.value });
  }

  updateBrewery (e) {
    this.setState({ brewery: e.target.value });
  }

  updateStyle (e) {
    this.setState({ style: e.target.value });
  }

  updateABV (e) {
    this.setState({ ABV: e.target.value });
  }

  handleSubmit () {
      var beerData = { beer: {
        name: this.state.name,
        brewery: this.state.brewery,
        type: this.state.type,
        abv: this.state.abv
      }
    };

    Store.dispatch ( addBeer(beerData) );

    Store.dispatch ( fetchBeers() );

    // this.props.addBeer(beerData);

    // this.setState({ name: "", brewery: "", type: "" });
  }

  render () {
    var myProps = window.myProps = this.props;
    return (
      <div className="beer-new-container">
        <div className="beer-form-container">
          <form onSubmit={this.handleSubmit.bind(this)} id="beerAddForm">
            <label className="label">Name</label>
            <input type="text"
              value={this.state.name}
              onChange={this.updateName.bind(this)}
              placeholder={"name"}/>
            <label className="label">Brewery</label>
            <input type="text"
              value={this.state.brewery}
              onChange={this.updateBrewery.bind(this)}
              placeholder={"brewery"} />
            <label className="label">Type</label>
            <input type="text"
              value={this.state.style}
              onChange={this.updateStyle.bind(this)}
              placeholder={"style"} />
            <label className="label">ABV (%)</label>
            <input type="text"
              value={this.state.ABV}
              onChange={this.updateABV.bind(this)}
              placeholder={"0"} />
            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default BeerNew;
