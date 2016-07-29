// Front end only actions
// none

//Actions triggered after API calls
export const receiveBeers = beers => ({
  type: "RECEIVE_BEERS",
  beers
});

export const receiveBeer = beer => ({
  type: "RECEIVE_BEER",
  beer
});

//Actions triggering API calls
export const fetchBeers = () => ({
  type: "FETCH_ALL_BEERS"
});

export const createBeer = beer => ({
  type: "ADD_BEER",
  beer
});

export const updateBeer = (id, data) => ({
  type: "UPDATE_BEER",
  id,
  data
});
