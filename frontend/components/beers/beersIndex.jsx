import React from 'react';
import FontAwesome from 'react-fontawesome';
import BeerNewForm from './beerNewForm';
import { fetchBeers } from '../../actions/beerActions.js';

class BeersIndex extends React.Component {
  componentDidMount(){
    Store.dispatch ( fetchBeers() );
  }

  beersList() {
    var beers = [];
    for (var id in this.props.beers) {
      beers.push(this.props.beers[id]);
    }

    beers.map( (id, beer) => {
      return (
        <li key={id}>
          {beer.name}
          {beer.brewery}
          {beer.type}
        </li>
      );
    });
  }

  render () {
    return (
      <div className="beers-index-container">
        <h2>Beer Index</h2>
        <BeerNewForm />
        {this.beersList()}
      </div>
    );
  }
}

export default BeersIndex;
