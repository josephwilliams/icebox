export default function(oldState = {}, action){
  switch(action.type){
    case "RECEIVE_BREWERIES":
      const newState = {};
      action.beers.forEach( brewery => { newState[brewery.id] = brewery; } );
      return newState;
    case "RECEIVE_BREWERY":
      let newBrewery = {};
      newBeer[action.brewery.id] = action.brewery;
      return Object.assign({}, oldState, newBrewery);
    default:
      return oldState;
  }
}
