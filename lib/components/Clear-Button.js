import React, { Component } from 'react';
const ReactDOM = require('react-dom');
import MessageInput from './Message-Input';

export default class ClearButton extends Component {
  render() {

    return (

        <button className="btn-clear"
        disabled={this.props.draftMessageProp === ''}
        onClick={this.props.clearMessageFunction}>Clear</button>
    )
  }
}
