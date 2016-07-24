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
var Splash = require('./components/splash/splash.jsx');
var BeersIndex = require('./components/beers/beersIndex.jsx');
var BeerShow = require('./components/beers/beerShow.jsx');

//Source
var App = React.createClass({
  render: function () {
    return (
      <div className="content">
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Router history={hashHistory} >
    <Route path="/" component={App} >
      <IndexRoute component={Splash} />
      <Route path="splash" component={Splash} />
      <Route path="beers" component={BeersIndex} />
        <Route path="beers/:beerId" component={BeerShow} />
    </Route>
  </Router>
);


document.addEventListener("DOMContentLoaded", function () {
  Modal.setAppElement(document.body);
  var root = document.getElementById("root");
  ReactDOM.render(routes, root);
});
