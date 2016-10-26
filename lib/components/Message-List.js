import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { pick, map, extend } from 'lodash';

export default class MessageList extends Component {

get messageDecision(){
  let messages = [];

  if (this.props.filterMessages !== '') {
    messages = this.props.filterMessages;
  } else {
    messages = this.props.messages;
  }

  return messages;
}
  render() {

    return (
      <div>
        <ul>
          { this.props.messages.map(m => <li key={m.key}>
            <article className="date-name">
              <span className="message-date"> {m.createdAt} </span>
              <span className="message-date-mobile">{m.createdAtMobile}</span>
              <span className="user-name-message"> {m.user.displayName.split(' ').slice(0,1)}</span>
            </article>
              <span className="message-display">{m.content}</span></li>) }
        </ul>
      </div>
    )
  }
}

MessageList.defaultProps = {messages: []}
