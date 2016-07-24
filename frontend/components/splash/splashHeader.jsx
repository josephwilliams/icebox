var React = require('react');
var FontAwesome = require('react-fontawesome');
var SearchBar = require('../shared/searchBar.jsx');

var splashHeader = React.createClass({
  render: function() {
    return (
      <div className="splash-header-container">
        <div className="splash-header-top">
          <div className="splash-header-left">
            <div className="splash-header-link">
              about
            </div>
            <div className="splash-header-link">
              beers
            </div>
            <div className="splash-header-link">
              breweries
            </div>
          </div>
          <div className="splash-header-center">
            <img src="http://www.clker.com/cliparts/5/9/5/1/13179180341098624364beer%20bing.jpg"></img>
            <h1>icebox</h1>
          </div>
          <div className="splash-header-right">
            <div className="splash-header-link">
              login
            </div>
            <div className="splash-header-link">
              signup
            </div>
            <div className="splash-header-icons-container">
              <FontAwesome name="fa fa-instagram" />
              <FontAwesome name="fa fa-twitter" />
              <FontAwesome name="fa fa-facebook-square" />
              <FontAwesome name="fa fa-github" />
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = splashHeader;
