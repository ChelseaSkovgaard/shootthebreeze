import React, { Component } from 'react';
const ReactDOM = require('react-dom');
// const MessageInput = require('Message-Input');

class LoginUser extends Component {
  render() {
    //if loggedIn = false, then render the login button
    //else display user name, message input component, buttons,
    return(
      <div className="login-box">
        {this.props.user ? <p id="login-display">Logged in as {this.props.user.displayName} ({this.props.user.email})</p> : <button id="btn-login" onClick={() => this.props.signInFunction()}>Sign In</button> }
      </div>
      )
    }
}

module.exports = LoginUser
