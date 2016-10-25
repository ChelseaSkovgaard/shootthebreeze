import React, { Component } from 'react';
const ReactDOM = require('react-dom');

export default class SubmitButton extends Component {
  render() {
    return (
        <button className="btn-submit"
        disabled={this.props.draftMessageProp === ''}
        disabled={this.props.draftMessageProp.length >= 140}
        onClick={this.props.addMessageFunction}>Submit</button>
    )
  }
}

SubmitButton.defaultProps = {draftMessageProp: ''}
