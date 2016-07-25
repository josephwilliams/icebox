import React from 'react';
import FontAwesome from 'react-fontawesome';

const SearchBar = React.createClass({
  render: function() {
    return (
      <div className="search-bar">
        <input placeholder="search" className="search-input"/>
        <button className="search-button">
          <FontAwesome name="fa fa-search" />
        </button>
      </div>
    );
  }

});

module.exports = SearchBar;
