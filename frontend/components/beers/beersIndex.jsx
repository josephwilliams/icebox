import React from 'react';
import FontAwesome from 'react-fontawesome';
import BeerNewForm from './beerNewForm';
import { fetchBeers } from '../../actions/beerActions.js';
import SmallBeerItem from '../shared/beer_items/small_beer_item';

class BeersIndex extends React.Component {
  componentDidMount(){
    Store.dispatch ( fetchBeers() );
  }

  beersList() {
    var beers = [];
    var beerProps = this.props.beers;
    for (var key in beerProps) {
      if (beerProps.hasOwnProperty(key)) {
        beers.push(beerProps[key]);
      }
    }

    return beers.map( (beer, id) => {
      return (
        <SmallBeerItem name={beer.name}
                       brewery={beer.brewery}
                       style={beer.style}
                       abv={beer.abv}
                       key={id}
                       />
      );
    });
  }

  render () {
    return (
      <div className="beers-index-container">
        <h2>Beer Index</h2>
        <BeerNewForm />
        <div className="beers-index-items">
          {this.beersList()}
        </div>
      </div>
    );
  }
}

export default BeersIndex;
