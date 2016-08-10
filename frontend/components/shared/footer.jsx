import React from 'react';

const SplashFooter = React.createClass({
  getInitialState: function () {
      return({ hopsClass: "footer-top" });
  },

  // componentDidMount: function() {
  //     window.addEventListener('scroll', this.handleScroll);
  // },
  //
  // componentWillUnmount: function() {
  //     window.removeEventListener('scroll', this.handleScroll);
  // },
  //
  // handleScroll: function(event) {
  //     let scrollTop = event.srcElement.body.scrollTop;
  //
  //     if (scrollTop > 290) {
  //       this.setState({ hopsClass: "footer-top-wiggle" });
  //     } else if (scrollTop < 290) {
  //       this.setState({ hopsClass: "footer-top" });
  //     }
  // },

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  linkBeers: function () {
    this.context.router.push("beers");
  },

  linkBreweries: function () {
    this.context.router.push("breweries");
  },

  linkSplash: function () {
    this.context.router.push("splash");
  },

  render: function() {
    var classTitle = this.state.hopsClass;
    return (
      <div className="footer">
        <div className={classTitle} id="trigger">
          <img src="images/beers_shelf.jpg" id="animate"></img>
        </div>
        <div className="footer-bottom">
            <div className="footer-bottom-left">
              <p onClick={this.linkSplash}>about</p>
              <p onClick={this.linkBeers}>beers</p>
              <p onClick={this.linkBreweries}>breweries</p>
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
