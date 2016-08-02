const root = 'http://localhost:3000/api/breweries/';
import Axios from 'axios';
window.Axios = Axios;

export const fetchBreweries = () => (
  Axios.get(root).then( r => r.data )
);

export const addBrewery = data => (
  Axios.post(root, data)
  .then( r => {
    return ( r.data );
  })
  .catch( error => {
    console.log("error:");
    console.log(error);
  })
);

export const updateBrewery = (id, data) => (
  Axios.put(root + id, data).then( r => ( r.data.data[0] ))
);
