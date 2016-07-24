var React = require('react');
var PropTypes = React.PropTypes;

var SplashContent = React.createClass({

  render: function() {
    return (
      <div className="splash-content-container">
        <img src="https://66.media.tumblr.com/7ed5b8457f0c5a53b44fd17f0037d559/tumblr_oasrzbZUrE1vns4tpo1_1280.png"></img>
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
