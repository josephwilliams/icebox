import React from 'react';

const SearchBox = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  componentDidMount: function () {
    window.addEventListener('keydown', this.handleKeyDown);
  },

  componentWillUnmount: function () {
    window.removeEventListener('keydown', this.handleKeyDown);
  },

  handleKeyDown: function (event) {
    if (event.keyCode == 27)
      this.props.closeSearchBox()
  },

  linkAddBeer: function () {
    this.context.router.push("new-beer");
  },

  render: function() {
    let middleWallsStyle = {
      borderRight: "1px solid #f1f1f1",
      borderLeft: "1px solid #f1f1f1"
    }

    return (
      <div className="search-box-content">
        <div className="search-box-top">
          <div className="search-box-close" onClick={this.props.closeSearchBox}>
            X
          </div>
        </div>
        <div className="search-box-middle">
          <div className="search-box-content-beers">
            <h3>beers</h3>
          </div>
          <div className="search-box-content-breweries" style={middleWallsStyle}>
            <h3>breweries</h3>
          </div>
          <div className="search-box-content-users">
            <h3>users</h3>
          </div>
        </div>
        <div className="search-box-bottom">
          <div className="add-beer-button" onClick={this.linkAddBeer}>
            add something!
          </div>
        </div>
      </div>
    );
  }

});

module.exports = SearchBox;
