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

//Components
import Splash from './components/splash/splash.jsx';
import BeersIndex from './components/beers/beersIndex.jsx';
import BeerShow from './components/beers/beerShow.jsx';
import BreweriesIndex from './components/breweries/breweriesIndex.jsx';
import SearchIndex from './components/search/search.jsx';
import SplashFooter from './components/splash/splashFooter.jsx';
import SplashHeader from './components/splash/splashHeader.jsx';
import BeerNew from './components/beers/beerNew.jsx';

//Source
const App = React.createClass({
  render: function () {
    return (
      <div className="content">
        <SplashHeader />
        {this.props.children}
        <SplashFooter />
      </div>
    );
  }
});

const routes = (
  <Router history={hashHistory} >
    <Route path="/" component={App} >
      <IndexRoute component={Splash} />
      <Route path="splash" component={Splash} />
      <Route path="search" component={SearchIndex} />
      <Route path="breweries" component={BreweriesIndex} />
      <Route path="beers" component={BeersIndex} />
        <Route path="beers/:beerId" component={BeerShow} />
      <Route path="new-beer" component={BeerNew} />
    </Route>
  </Router>
);


document.addEventListener("DOMContentLoaded", function () {
  Modal.setAppElement(document.body);
  const root = document.getElementById("root");
  ReactDOM.render(routes, root);
});
