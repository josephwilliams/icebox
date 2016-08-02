// Front end only actions
// none

//Actions triggered after API calls
export const receiveBreweries = breweries => ({
  type: "RECEIVE_BREWERIES",
  breweries
});

export const receiveBrewery = brewery => {
  return ({
    type: "RECEIVE_BREWERY",
    brewery
  })
}

//Actions triggering API calls
export const fetchBreweries = () => ({
  type: "FETCH_ALL_BREWERIES"
});

export const addBrewery = brewery => {
    return ({
      type: "ADD_BREWERY",
      brewery
    })
  };

export const updateBrewery = (id, data) => ({
  type: "UPDATE_BREWERY",
  id,
  data
});
