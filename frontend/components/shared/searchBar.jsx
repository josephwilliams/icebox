import React from 'react';
import FontAwesome from 'react-fontawesome';
import SearchBox from './searchBox.jsx';

const SearchBar = React.createClass({
  getInitialState: function () {
    return ({ searchClassDisplay: "search-box-hide", searchInput: "" });
  },

  handleSearchInput: function (event) {
    let searchInput = this.state.searchInput;
    if (searchInput === "") {
      this.setState({ searchClassDisplay: "search-box-hide" })
    } else {
      this.setState({ searchClassDisplay: "search-box-show" });
    }

    this.setState({ searchInput: event.target.value });
  },

  closeSearchBox: function () {
    this.setState({ searchInput: "" });
    this.setState({ searchClassDisplay: "search-box-hide" });
  },

  render: function() {
    let searchClass = this.state.searchClassDisplay;

    return (
      <div className="search-bar">
        <input placeholder="search"
               className="search-input"
               value={this.state.searchInput}
               onChange={this.handleSearchInput}
               onKeyUp={this.handleSearchInput}
               />
        <button className="search-button">
          <FontAwesome name="fa fa-search" />
        </button>
        <div className={searchClass} >
          <SearchBox searchInput={this.state.searchInput}
                     closeSearchBox={this.closeSearchBox}/>
        </div>
      </div>
    );
  }

});

module.exports = SearchBar;
