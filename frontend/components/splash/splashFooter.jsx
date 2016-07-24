var React = require('react');

var SplashFooter = React.createClass({

  render: function() {
    return (
      <div className="splash-footer">
        <div className="footer-left">
          <p>about</p>
          <p>beers</p>
          <p>breweries</p>
          <p>search</p>
          <p>github</p>
        </div>
        <div className="footer-right">
        </div>
      </div>
    );
  }

});

module.exports = SplashFooter;
