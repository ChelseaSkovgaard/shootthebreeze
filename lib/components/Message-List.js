import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { pick, map, extend } from 'lodash';

export default class MessageList extends Component {

  render() {
    return (
      <div>
        <ul>
          { this.props.messages.map(m => <li key={m.key}> <article className="date-name"><span className="message-date">{m.createdAt}</span>
          <span className="user-name-message"> {m.user.displayName}</span>
          </article>
          <span className="message-display">{m.content}</span></li>) }
        </ul>
      </div>
    )
  }
}
