import React from 'react';
import FontAwesome from 'react-fontawesome';
import BeerNewForm from './beerFormContainer';
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
                       id={id}
                       key={id}
        />
      );
    });
  }

  render () {
    return (
      <div className="beers-index-container">
        <div className="beers-index-top">
          <BeerNewForm />
          <img src="http://previews.123rf.com/images/sudowoodo/sudowoodo1509/sudowoodo150900003/44606296-illustration-of-a-cute-old-cartoon-gnome-smoking-pipe-and-holding-beer--Stock-Vector.jpg"></img>
        </div>
        <div className="beers-index-items">
          {this.beersList()}
        </div>
      </div>
    );
  }
}

export default BeersIndex;
