import React, { Component } from 'react';
const ReactDOM = require('react-dom');

export default class CharacterCount extends Component {
  render() {
    return (
      <div className="character-count">{this.props.draftMessageProp.length}</div>
    )
  }
}
