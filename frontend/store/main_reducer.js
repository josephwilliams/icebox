import { combineReducers } from 'redux';
import beers from "./reducers/beers";
import breweries from "./reducers/breweries";
import currentUser from "./reducers/currentUser.js";

export default combineReducers({ beers, breweries, currentUser });

// state = {
//   todos: [ todo1, todo2 ...]
//   filter: "All"
// }
