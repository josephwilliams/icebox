import React from 'react';
import FontAwesome from 'react-fontawesome';

//sub-components
import SplashHeader from '../splash/splashHeader';
import SplashFooter from '../splash/splashFooter';

var BreweriesIndex = React.createClass({

  render: function() {
    return (
      <div className="beers-index-container">
        <div className="beers-index-content">
          <h2>Breweries!</h2>
        </div>
      </div>
    );
  }

});

module.exports = BreweriesIndex;
