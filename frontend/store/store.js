import { createStore, applyMiddleware } from 'redux';
import Reducer from "./main_reducer";
import BeersAPI from "../middleware/beersAPI";

window.Store = createStore(
  Reducer,
  applyMiddleware(BeersAPI)
);

export default window.Store;
