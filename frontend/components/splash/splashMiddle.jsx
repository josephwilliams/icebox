import React from 'react';
import FontAwesome from 'react-fontawesome';
import SearchBar from '../shared/searchBar';

const SplashMiddle = React.createClass({
  render: function() {
    var flaskStyle = {
      "position": "relative",
      "top": "7px",
      "width": "56px",
    }

    var usersStyle = {
      "position": "relative",
      "top": "-5px",
      "left": "5px"
    }

    return (
      <div className="splash-middle-container">
        <div className="splash-middle-object-holder">
          <div className="splash-middle-object">
            <div className="splash-middle-content-top">
              <div className="splash-middle-content-top-symbols">
                <img src="images/beerglass.png"></img>
                <img src="images/flask_img.png" style={flaskStyle}></img>
                <FontAwesome name="fa fa-users fa-3x" style={usersStyle}/>
              </div>
              <div className="splash-middle-content-top-text">
                beers, breweries, and the friends who love them
              </div>
            </div>
            <div className="splash-middle-content-bottom">
              <div className="splash-header-search">
                <SearchBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = SplashMiddle;
