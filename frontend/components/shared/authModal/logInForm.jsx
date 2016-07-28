import React from 'react';

var LogInForm = React.createClass ({
  getInitialState: function () {
    return ({ username: "", password: "", errorMessage: "" });
  },

  updateUsername: function (event) {
    this.setState({ username: event.target.value });
  },

  updatePassword: function (event) {
    this.setState({ password: event.target.value });
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var user_params = {
      username: this.state.username,
      password: this.state.password
    }

    var that = this;
    $.ajax({
      url: "api/session",
      type: "POST",
      data: {user: {username: user_params.username, password: user_params.username}},
      success: function (userData) {
        that.props.toggleAuthModal();
        console.log(userData)
      },
       error: function (errorData) {
        that.setState({ showErrors: true });
        that.postErrors(errorData);
      }
    });
  },

  postErrors: function (errorData) {
    if (errorData) {
      var errorsStr = errorData.responseText.substring(12, 44);
      this.setState({ errorMessage: errorsStr });
    }
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
           <div className="auth-form-errors">
             {this.state.errorMessage}
           </div>
          <input type="submit" value="submit"></input>
          <img src="images/beer_row.jpg"></img>
        </form>
      </div>
    )
  }
});

module.exports = LogInForm;
