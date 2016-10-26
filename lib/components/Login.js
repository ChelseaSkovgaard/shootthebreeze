import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class LoginUser extends Component {
  render() {
    return(
      <div className="login-box">
        {this.props.user ? <p id="login-display">Logged in as <span className="user-name">{this.props.user.displayName}</span> ({this.props.user.email})  </p> : <button id="btn-login" onClick={() => this.props.signInFunction()}>Sign In</button> }
      </div>
      )
    }
}

module.exports = LoginUser
