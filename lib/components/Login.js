import React, { Component } from 'react';
const ReactDOM = require('react-dom');
// const MessageInput = require('Message-Input');

class LoginUser extends Component {
  render() {
    //if loggedIn = false, then render the login button
    //else display user name, message input component, buttons,
    return(
      <div>
        {this.props.user ? <p>Hello this.props.user.displayName </p> : <button onClick={() => this.props.signInFunction()}>Sign In</button> }
      </div>
      )
    }
}

module.exports = LoginUser
