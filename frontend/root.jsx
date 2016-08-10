//React
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from "react-modal";

//Router
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Link = ReactRouter.link;

//Redux
import { Provider } from 'react-redux';
import Store from "./store/store";

//Components
import Footer from './components/shared/footer.jsx';
import Header from './components/shared/header.jsx';
import Splash from './components/splash/splash.jsx';
import BeersIndex from './components/beers/beersContainer';
import BeerShow from './components/beers/beerShow.jsx';
import BreweriesIndex from './components/breweries/breweries_container.jsx';
import BreweryShow from './components/breweries/brewery_show.jsx';
import SearchIndex from './components/search/searchContainer.jsx';
import BeerNewForm from './components/beers/beerFormContainer.jsx';
import TopMessage from './components/shared/top_message';

//Source
const App = React.createClass({
  render: function () {
    return (
      <Provider store={Store}>
        <div className="content">
          <Header />
          {this.props.children}
          <Footer />
        </div>
      </Provider>
    );
  }
});

const Routes = (
  <Router history={hashHistory} >
    <Route path="/" component={App} >
      <IndexRoute component={Splash} />
      <Route path="splash" component={Splash} />
      <Route path="search" component={SearchIndex} />
      <Route path="breweries" component={BreweriesIndex} />
        <Route path="breweries/:breweryId" component={BreweryShow} />
      <Route path="beers" component={BeersIndex} />
        <Route path="beers/:beerId" component={BeerShow} />
      <Route path="new-beer" component={BeerNewForm} />
    </Route>
  </Router>
);


document.addEventListener("DOMContentLoaded", function () {
  Modal.setAppElement(document.body);
  const root = document.getElementById("root");
  ReactDOM.render(Routes, root);
});
