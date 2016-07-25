import React from 'react';

const SplashContent = React.createClass({
  render: function() {
    return (
      <div className="splash-content-container">
        <div className="splash-content-image">
          <img src="images/pint-hand.png"></img>
        </div>
        <div className="splash-content-text">
          <h2>icebox is the shit</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
        </div>
      </div>
    );
  }

});

module.exports = SplashContent;
