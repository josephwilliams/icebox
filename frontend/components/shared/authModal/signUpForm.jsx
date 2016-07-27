import React from 'react';

class SignUpForm extends React.Component {
  componentDidMount () {
    // if ($.browser.webkit) {
    //   $('input[name="password"]').attr('autocomplete', 'off')
    // }
  }

  render () {
    return (
      <div className="auth-form">
        <form className="auth-form-inputs">
          <input type="text" placeholder="username"></input>
          <input type="password" placeholder="password"></input>
          <input type="submit" value="submit"></input>
          <img src="images/beer_row.jpg"></img>
        </form>
      </div>
    )
  }
}

module.exports = SignUpForm;
