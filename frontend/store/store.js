import { createStore, applyMiddleware } from 'redux';
import Reducer from "./main_reducer";
import BeersAPI from "../middleware/beersAPI";
import BreweriesAPI from "../middleware/breweries_api";

window.Store = createStore(
  Reducer,
  applyMiddleware(BeersAPI),
  applyMiddleware(BreweriesAPI)
);

export default window.Store;
