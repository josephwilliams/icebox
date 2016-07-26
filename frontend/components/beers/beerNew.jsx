import React from 'react';
import FontAwesome from 'react-fontawesome';

const BeerNew = React.createClass({
  getInitialState: function () {
    return({
      name: "", brewery: "", type: ""
    });
  },

  updateName: function (e) {
    this.setState({ name: e.target.value });
  },

  updateBrewery: function (e) {
    this.setState({ brewery: e.target.value });
  },

  updateType: function (e) {
    this.setState({ type: e.target.value });
  },

  handleSubmit: function () {
    let data = {
      name: this.state.name,
      brewery: this.state.brewery,
      type: this.state.type,
    }

    $.ajax({
      url: "api/beers",
      type: "POST",
      data: data,
      success: function (beerData) {
        console.log("good beer add!");
        console.log(beerData);
      }
    });
  },

  render: function() {
    return (
      <div className="beer-new-container">
        <div className="beer-form-container">
          <form onSubmit={this.handleSubmit} id="beerAddForm">
            <input type="text"
              value={this.state.name}
              onChange={this.updateName} />
            <label className="label">Name</label>
            <input type="text"
              value={this.state.brewery}
              onChange={this.updateBrewery} />
            <label className="label">Brewery</label>
            <input type="text"
              value={this.state.type}
              onChange={this.updateType} />
            <label className="label">Type</label>
            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
    );
  }
});

module.exports = BeerNew;
