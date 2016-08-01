const root = 'http://localhost:3000/api/beers/';
import Axios from 'axios';
window.Axios = Axios;

export const fetchBeers = () => (
  Axios.get(root).then( r => r.data )
);

export const addBeer = data => (
  Axios.post(root, data).then( r => ( r.data.data[0] ))
);

export const updateBeer = (id, data) => (
  Axios.put(root + id, data).then( r => ( r.data.data[0] ))
);
