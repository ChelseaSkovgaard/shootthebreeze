import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class CharacterCount extends Component {
  render() {
    return (
      <div className="character-count">{this.props.draftMessageProp.length}</div>
    )
  }
}

CharacterCount.defaultProps = {draftMessageProp: ''};
