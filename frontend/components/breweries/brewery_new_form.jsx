import React from 'react';
import FontAwesome from 'react-fontawesome';
import { addBrewery, fetchBreweries } from '../../actions/beerActions';

class BreweryNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "", location: "", logo_url: ""
    };
  }

  updateValue (attribute) {
    return e => this.setState({ [attribute]: e.target.value });
  }

  handleSubmit () {
      var breweryData = { brewery: {
        name: this.state.name,
        location: this.state.location,
        logo_url: this.state.logo_url
      }
    };

    this.props.addBrewery(breweryData);
    this.setState({ name: "", location: "", logo_url: "" });
  }

  render () {
    return (
      <div className="beer-new-container">
        <div className="beer-form-container">
          <form onSubmit={this.handleSubmit.bind(this)} id="beerAddForm">

            <label className="label">Name</label>
            <input type="text"
              value={this.state.name}
              onChange={this.updateValue('name')}
              placeholder={"name"}/>

            <label className="label">Location</label>
            <input type="text"
              value={this.state.location}
              onChange={this.updateValue('location')}
              placeholder={"location"} />

            <label className="label">Logo URL</label>
            <input type="text"
              value={this.state.style}
              onChange={this.updateValue('logo_url')}
              placeholder={"http://..."} />

            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default BreweryNew;
