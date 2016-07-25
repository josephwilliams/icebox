import React from 'react';
import FontAwesome from 'react-fontawesome';

//sub-components
import SplashHeader from '../splash/splashHeader';
import SplashFooter from '../splash/splashFooter';

var BeersIndex = React.createClass({

  render: function() {
    return (
      <div className="beers-index-container">
        <h2>Beer!</h2>
      </div>
    );
  }

});

module.exports = BeersIndex;
