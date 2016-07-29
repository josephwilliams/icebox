import { combineReducers } from 'redux';
import beers from "./reducers/beers";
import currentUser from "./reducers/currentUser.js";

export default combineReducers({ beers, currentUser });

// state = {
//   todos: [ todo1, todo2 ...]
//   filter: "All"
// }
