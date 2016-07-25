import React from 'react';
import FontAwesome from 'react-fontawesome';
import SearchBar from '../shared/searchBar';

const SplashMiddle = React.createClass({


  render: function() {
    return (
      <div className="splash-middle-container">
        <div className="splash-middle-object">
          <div className="splash-middle-content-top">
            <div className="splash-middle-content-top-symbols">
              <img src="images/beerglass.png"></img>
              <FontAwesome name="fa fa-flask fa-3x" />
              <FontAwesome name="fa fa-users fa-3x" />
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
    );
  }

});

module.exports = SplashMiddle;
