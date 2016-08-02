import React from 'react';
import FontAwesome from 'react-fontawesome';
import BreweryNewForm from './brewery_form_container';
import { fetchBreweries } from '../../actions/brewery_actions.js';
import SmallBreweryItem from '../shared/brewery_items/small_brewery_item';

class BreweriesIndex extends React.Component {
  componentDidMount(){
    Store.dispatch ( fetchBreweries() );
  }

  breweriesList() {
    var breweries = [];
    var breweryProps = this.props.breweries;
    for (var key in breweryProps) {
      if (breweryProps.hasOwnProperty(key)) {
        breweries.push(breweryProps[key]);
      }
    }

    return breweries.map( (brewery, id) => {
      return (
        <SmallBreweryItem name={brewery.name}
                         brewery={brewery.location}
                         logoUrl={brewery.logo_url}
                         id={id}
                         key={id}
        />
      );
    });
  }

  render () {
    return (
      <div className="breweries-index-container">
        <div className="beers-index-items">
          <div className="breweries-index-top">
            <h2>Breweries!</h2>
          </div>
          {this.breweriesList()}
        </div>
      </div>
    );
  }
}

module.exports = BreweriesIndex;
