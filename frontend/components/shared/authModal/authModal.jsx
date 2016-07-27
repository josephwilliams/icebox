import React from 'react';
import FontAwesome from 'react-fontawesome';
import LogInForm from './logInForm.jsx';
import SignUpForm from './signUpForm.jsx';

const AuthModal = React.createClass({
  getInitialState: function () {
    return ({ authType: this.props.authType });
  },

  toggleForm: function () {
    let currentType = this.state.authType;
    this.setState({ authType: !currentType });
  },

  formHeaders: function () {
    if (this.state.authType) {
      return (
        <div className="auth-modal-header">
          <h4 className="auth-modal-header-selected">sign up</h4>
          <h4 className="auth-modal-header-unselected" onClick={this.toggleForm}>log in</h4>
        </div>
      )
    } else {
      return (
        <div className="auth-modal-header">
          <h4 className="auth-modal-header-unselected" onClick={this.toggleForm}>sign up</h4>
          <h4 className="auth-modal-header-selected">log in</h4>
        </div>
      )
    }
  },

  render: function() {
    var authForm = this.state.authType ? <SignUpForm /> : <LogInForm />

    return (
      <div className="auth-modal-container">
        <FontAwesome name="fa fa-user fa-2x" />
          {this.formHeaders()}
        <div className="auth-modal-form">
          {authForm}
        </div>
      </div>
    );
  }
});

module.exports = AuthModal;
