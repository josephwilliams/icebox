import React from 'react';

var LogInForm = React.createClass ({
  getInitialState: function () {
    return ({ username: "", password: "" });
  },

  updateUsername: function (event) {
    this.setState({ username: event.target.value });
  },

  updatePassword: function (event) {
    this.setState({ password: event.target.value });
  },

  handleSubmit: function () {
    var userData = {
      username: this.state.username,
      password: this.state.password
    }

    $.ajax({
      url: "api/session",
      type: "POST",
      data: {"user_params": {"username": userData.username, "password": userData.username}},
      success: function (userData) {
        console.log(userData)
      }
    });
  },

  render: function () {
    return (
      <div className="auth-form">
        <form className="auth-form-inputs" onSubmit={this.handleSubmit}>
          <input type="text"
                 placeholder="username"
                 onChange={this.updateUsername}
                 value={this.state.username}></input>
          <input type="password"
                 placeholder="password"
                 onChange={this.updatePassword}
                 value={this.state.password}></input>
          <input type="submit" value="submit"></input>
          <img src="images/beer_row.jpg"></img>
        </form>
      </div>
    )
  }
});

module.exports = LogInForm;
