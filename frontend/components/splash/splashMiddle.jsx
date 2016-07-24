var React = require('react');
var FontAwesome = require('react-fontawesome');
var SearchBar = require('../shared/searchBar');

var SplashMiddle = React.createClass({
  render: function() {
    return (
      <div className="splash-middle-container">
        <div className="splash-middle-object">
          <div className="splash-middle-object-content">
            <img src="images/beerglass.png"></img>
            <h3>beers</h3>
          </div>
        </div>
        <div className="splash-middle-object">
          <div className="splash-middle-object-content">
            <FontAwesome name="fa fa-flask fa-3x" />
            <h3>breweries</h3>
          </div>
        </div>
        <div className="splash-middle-object">
          <div className="splash-middle-object-content">
            <FontAwesome name="fa fa-search fa-3x" />
            <h3>search</h3>
              <div className="splash-header-search">
                <SearchBar />
              </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = SplashMiddle;
