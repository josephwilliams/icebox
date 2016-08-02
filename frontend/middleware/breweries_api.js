import {fetchBreweries, addBrewery, updateBrewery} from "../util/breweries_util";
import {receiveBreweries, receiveBrewery} from "../actions/brewery_actions";

export default ({getState, dispatch}) => next => action => {
  switch (action.type){
    case "FETCH_ALL_BREWERIES":
      fetchBreweries().then( breweries => dispatch( receiveBreweries(breweries) ) );
      break;
    case "ADD_BREWERY":
      addBrewery(action.brewery).then( beer => dispatch( receiveBrewery(brewery) ) );
      break;
    case "UPDATE_BREWERY":
      updateBrewery(action.id, action.data).then( brewery => dispatch( receiveBrewery(brewery) ) );
  }
  next(action);
};
