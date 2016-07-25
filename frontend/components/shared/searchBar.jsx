var React = require('react');
var FontAwesome = require('react-fontawesome');

var SearchBar = React.createClass({

  render: function() {
    return (
      <div className="search-bar">
        <input placeholder="Search" className="search-input"/>
        <button className="search-button">
          <FontAwesome name="fa fa-search" />
        </button>
      </div>
    );
  }

});

module.exports = SearchBar;
