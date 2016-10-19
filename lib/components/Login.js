const React = require('react');
const ReactDOM = require('react-dom');
const MessageInput = require('Message-Input');

export default class Login extends Component {

  render() {
    //if loggedIn = false, then render the login button
    //else display user name, message input component, buttons,
    return()
    {user ?
      <div>
        <div> Logged in as {this.props.userName.displayName} ({this.props.userName.email})</div>
        <div> <MessageInput /></div>
      </div>

    : <div>
        <button id="btn-login" onClick={() => signIn()}>Log In</button>
      </div>
      }
  }
