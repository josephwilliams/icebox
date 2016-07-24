var React = require('react');
var PropTypes = React.PropTypes;

var SplashContent = React.createClass({

  render: function() {
    return (
      <div className="splash-content-container">
        <div className="splash-content-image">
          <img src="images/pint-hand.png"></img>
        </div>
        <div className="splash-content-text">
          <h2>icebox is the shit</h2>
          <p>fucking right!</p>
          <p>woaaaaahhhhh</p>
        </div>
      </div>
    );
  }

});

module.exports = SplashContent;
