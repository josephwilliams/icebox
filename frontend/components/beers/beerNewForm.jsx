import React from 'react';
import FontAwesome from 'react-fontawesome';

class BeerNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "", brewery: "", style: "", ABV: 0
    };
  }

  updateName (e) {
    this.setState({ name: e.target.value });
  }

  updateBrewery (e) {
    this.setState({ brewery: e.target.value });
  }

  updateStyle (e) {
    this.setState({ style: e.target.value });
  }

  updateABV (e) {
    this.setState({ ABV: e.target.value });
  }

  handleSubmit () {
    var beerData = {
      name: this.state.name,
      brewery: this.state.brewery,
      type: this.state.type,
    };

    // this.setState({ name: "", brewery: "", type: "" });
    // this.props.createBeer(beerData);

    // $.ajax({
    //   url: "api/beers",
    //   type: "POST",
    //   data: data,
    //   success: function (beerData) {
    //     console.log("good beer add!");
    //     console.log(beerData);
    //   }
    // });
  }

  render () {
    return (
      <div className="beer-new-container">
        <div className="beer-form-container">
          <form onSubmit={this.handleSubmit} id="beerAddForm">
            <label className="label">Name</label>
            <input type="text"
              value={this.state.name}
              onChange={this.updateName}
              placeholder={"name"}/>
            <label className="label">Brewery</label>
            <input type="text"
              value={this.state.brewery}
              onChange={this.updateBrewery}
              placeholder={"brewery"} />
            <label className="label">Type</label>
            <input type="text"
              value={this.state.style}
              onChange={this.updateStyle}
              placeholder={"style"} />
            <label className="label">ABV (%)</label>
            <input type="text"
              value={this.state.ABV}
              onChange={this.updateABV}
              placeholder={"0"} />
            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default BeerNew;
