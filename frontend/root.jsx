//React
var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require("react-modal");

//Router
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

//Components
var Splash = require('./components/splash.jsx');
var BeersIndex = require('./components/beersIndex.jsx');
var BeerShow = require('./components/beerShow.jsx');

//Source
var App = React.createClass({
  render: function () {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

var Router = (
  <Route path="/" component={App}>
    <Router history={hashHistory}/>
    <IndexRoute component={Splash} />
    <Route path="beers" component={BeersIndex} />
      <Route path="beers/:beerId" component={BeerShow} />
  </Route>
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById("content");
  Modal.setAppElement(document.body);
  ReactDOM.render(Router, root);
});

document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById("root");
  ReactDOM.render(Router, root);
});
