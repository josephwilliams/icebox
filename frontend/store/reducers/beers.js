export default function(oldState = {}, action){
  switch(action.type){
    case "RECEIVE_BEERS":
      const newState = {};
      action.beers.forEach( beer => { newState[beer.id] = beer; } );
      return newState;
    case "RECEIVE_BEER":
      let newBeer = {};
      newBeer[action.beer.id] = action.beer;
      return Object.assign({}, oldState, newBeer);
  }
}
