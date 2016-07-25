import React from 'react';

const SplashFooter = React.createClass({
  getInitialState: function () {
      return({ hopsClass: "footer-top" });
  },

  componentDidMount: function() {
      window.addEventListener('scroll', this.handleScroll);
  },

  componentWillUnmount: function() {
      window.removeEventListener('scroll', this.handleScroll);
  },

  handleScroll: function(event) {
      let scrollTop = event.srcElement.body.scrollTop;
      this.setState({
        hopsClass: "footer-top-wiggle"
      });

      this.handleScroll2();
  },

  handleScroll2: function (event) {
    var that = this;
    setTimeout(function () {
      that.setState({
        hopsClass: "footer-top"
      });
    }, 1000);

    this.handleScroll();
  },

  render: function() {
    var classTitle = this.state.hopsClass;
    return (
      <div className="footer">
        <div className={classTitle} id="trigger">
          <img src="images/hops.png" id="animate"></img>
        </div>
        <div className="footer-bottom">
            <div className="footer-bottom-left">
              <p>about</p>
              <p>beers</p>
              <p>breweries</p>
              <p>search</p>
              <p>github</p>
            </div>
          <div className="footer-bottom-right">
        </div>
        </div>
      </div>
    );
  }

});

module.exports = SplashFooter;
