import React from 'react';
import FontAwesome from 'react-fontawesome';
import BeerNewForm from './beerNewForm';

class BeersIndex extends React.Component {
  // componentDidMount(){
  //   Store.dispatch ( fetchBeers() );
  // }

  // beersList() {
  //   return _(this.props.beers).map2arr( (id, beer) => {
  //     return (
  //       <li key={id}>
  //         {beer.name}
  //         {beer.brewery}
  //         {beer.type}
  //       </li>
  //     );
  //   });
  // }

  render () {
    return (
      <div className="beers-index-container">
        <h2>Beer!</h2>
        <BeerNewForm />
      </div>
    );
  }
}

export default BeersIndex;
