import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { pick, map, extend } from 'lodash';
import firebase, { reference, signIn } from '../firebase';
import LoginUser from './Login';
import MessageInput from './Message-Input';

// Very few things in this component are a good idea.
// Feel free to blow it all away.

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      draftMessage: '',
      user: null
    }
  }

  componentDidMount() {
    reference.limitToLast(100).on('value', (snapshot) => {
      const messages = snapshot.val() || {};
      this.setState({
        messages: map(messages, (val, key) => extend(val, { key }))
      });
    });

    firebase.auth().onAuthStateChanged(user => this.setState({ user }));
  }

  addNewMessage() {
    const { user, draftMessage } = this.state;

    reference.push({
      user: pick(user, 'displayName', 'email', 'uid'),
      content: draftMessage,
      createdAt: Date.now()
    });

    this.setState({ draftMessage: '' });
  }

  newFunction(e) {
    this.setState( {draftMessage: e.target.value} );
  }

  render() {
    const { user, messages, draftMessage } = this.state;

    return (
      <div className="Application">

        <ul>
          { this.state.messages.map(m => <li key={m.key}>{m.user.displayName}: {m.content}</li>) }
        </ul>

        <LoginUser signInFunction={signIn} user={this.state.user} />
        <div className="MessageInput">
        <MessageInput draftMessageProp={this.state.draftMessage} stateProp={this.newFunction.bind(this)}/>


          <div className="character-count">{this.state.draftMessage.length}</div>
          <button onClick={() => this.addNewMessage()}>Submit</button>
          <button>Clear</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Application/>, document.getElementById('application'));
