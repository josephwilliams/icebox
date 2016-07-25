import React from 'react';
import FontAwesome from 'react-fontawesome';
import SearchBar from '../shared/searchBar.jsx';
import Link from 'react-router';

const splashHeader = React.createClass({
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
    return (
      <div className="splash-header-container">
        <div className="splash-header-top">
          <div className="splash-header-left">
            <div className="splash-header-link" onClick={() => this.linkSplash()}>
              about
            </div>
            <div className="splash-header-link" onClick={() => this.linkBeers()}>
              beers
            </div>
            <div className="splash-header-link" onClick={() => this.linkBreweries()}>
              breweries
            </div>
          </div>
          <div className="splash-header-center" onClick={() => this.linkSplash()}>
              <img src="http://www.clker.com/cliparts/5/9/5/1/13179180341098624364beer%20bing.jpg"></img>
              <h1>icebox</h1>
          </div>
          <div className="splash-header-right">
            <div className="splash-header-link">
              login
            </div>
            <div className="splash-header-link">
              signup
            </div>
            <div className="splash-header-icons-container">
              <FontAwesome name="fa fa-twitter" />
              <FontAwesome name="fa fa-facebook-square" />
              <FontAwesome name="fa fa-github" />
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = splashHeader;
