import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class MessageInput extends Component {
  render() {

    return (
      <input className="message-field"
        placeholder="Message…"
        value={this.props.draftMessageProp}
        onChange={this.props.stateProp}
        />
    )
  }
}
