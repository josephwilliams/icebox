import React from 'react';
import FontAwesome from 'react-fontawesome';
import Search from 'react-search';
import { fetchBeers } from '../../actions/beerActions.js';
import { fetchBreweries } from '../../actions/brewery_actions.js';

class SearchIndex extends React.Component {
  componentDidMount(){
    Store.dispatch ( fetchBeers() );
    Store.dispatch ( fetchBreweries() );
  }

  items() {
    var items = [];
    var beerProps = this.props.beers;
    for (var key in beerProps) {
      if (beerProps.hasOwnProperty(key)) {
        items.push(beerProps[key]);
      }
    }
    var breweryProps = this.props.breweries;
    for (var key2 in breweryProps) {
      if (breweryProps.hasOwnProperty(key2)) {
        items.push(breweryProps[key2]);
      }
    }
    return items;
  }

  keys() {
    return ["name", "brewery"];
  }

  key() {
    return 'name';
  }

  render() {
    return (
      <div className="search-index-container">
        <h2>Search</h2>
        <Search items={this.items()} keys={this.keys()} searchKey={this.key()}/>
      </div>
    );
  }

}

module.exports = SearchIndex;
