import {fetchBeers, addBeer, updateBeer} from "../util/beersUtil";
import {receiveBeers, receiveBeer} from "../actions/beerActions";

export default ({getState, dispatch}) => next => action => {
  switch (action.type){
    case "FETCH_ALL_BEERS":
      fetchBeers().then( beers => {debugger; dispatch( receiveBeers(beers) ) });
      break;
    case "ADD_BEER":
      addBeer(action.beer).then( beer => dispatch( receiveBeer(beer) ) );
      break;
    case "UPDATE_BEER":
      updateBeer(action.id, action.data).then( beer => dispatch( receiveBeer(beer) ) );
  }
  next(action);
};
