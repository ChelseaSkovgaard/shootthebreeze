import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { pick, map, extend, filter} from 'lodash';
import moment from 'moment';
import firebase, { reference, signIn, signOut } from '../firebase';

import LoginUser from './Login';
import MessageInput from './Message-Input';
import CharacterCount from './Character-Count';
import ClearButton from './Clear-Button';
import SubmitButton from './Submit-Button';
import UserList from './User-List';
import SortButtons from './Sort';
import FilterField from './Filter';
import MessageList from './Message-List';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      draftMessage: '',
      user: null,
      filteredMessages: [],
      filterString: ''
    };
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
      createdAt: moment().format('MMMM D, h:mma'),
      createdAtMobile: moment().format('MM/D, h:mma')
    });
    this.setState({ draftMessage: '' });
  }

  setMessageState(e) {
    this.setState( {draftMessage: e.target.value} );
  }

  clearMessage(){
    this.setState({draftMessage: ''});
  }

  filterMessages(filterString) {
    this.setState(
      {filteredMessages: filter(this.state.messages, (message) => {
        return message.content.toLowerCase().includes(filterString.toLowerCase());
      }),
    filterString: filterString});
  }

  filterUserMessages(user) {
    this.state.filterString = 1;
    this.setState(
      {filteredMessages: filter(this.state.messages, (message) => {
        return message.user.email.includes(user.email);
      })
    });
  }

  sortMessages() {
    let array = this.state.messages;
    let reversed = array.reverse();
    this.setState({messages: reversed});
  }

  messageInputBar(user) {
    if (this.state.user === null) {
      return (
        <div></div>)
    } else {
      return ( <div className="message-input">
          <MessageInput draftMessageProp={this.state.draftMessage} stateProp={this.setMessageState.bind(this)}/>
          <CharacterCount draftMessageProp={this.state.draftMessage}/>
          <SubmitButton draftMessageProp={this.state.draftMessage} addMessageFunction={this.addNewMessage.bind(this)}/>
          <ClearButton draftMessageProp={this.state.draftMessage} clearMessageFunction={this.clearMessage.bind(this)}/>
          </div>
      )
    }
}

  filtered () {
    if (this.state.filterString) {
      return this.state.filteredMessages
    } else {
      return this.state.messages
    }
  }

  render() {
    const { user, messages, draftMessage, filteredMessages } = this.state;
    const messageListItems = this.filtered();

    return (
      <div className="Application">
        <article className="sort-filter-field">
          <h1> Shoot the Breeze </h1>
          <FilterField filterMessages={this.filterMessages.bind(this)}/>
          <SortButtons sortMessagesFunction={this.sortMessages.bind(this)}/>
        </article>
        <article className="messages-users">
          <div className="messages">
            <MessageList messages={messageListItems} filterMessages={this.state.filter} />
          </div>
          <UserList messages={messageListItems} currentUser={this.state.user} filterUserMessages={this.filterUserMessages.bind(this)}/>
        </article>
        <LoginUser signInFunction={signIn} signOutFunction={signOut} user={this.state.user} />
        <div>
          {this.messageInputBar()}
        </div>
      </div>
    )
  }
}


ReactDOM.render(<Application/>, document.getElementById('application'));
