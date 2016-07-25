var React = require('react');
var FontAwesome = require('react-fontawesome');

var SearchBar = React.createClass({

  render: function() {
    return (
      <div className="search-bar">
        <input placeholder="Search" className="search-input"/>
        <button className="search-button">seek</button>
      </div>
    );
  }

});

module.exports = SearchBar;
