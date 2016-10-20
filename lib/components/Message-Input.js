import React, { Component } from 'react';
const ReactDOM = require('react-dom');

export default class MessageInput extends Component {
  render() {

    return (
      <input
        placeholder="Message…"
        value={this.props.draftMessageProp}
        onChange={this.props.stateProp}
        />
    )
  }
}
