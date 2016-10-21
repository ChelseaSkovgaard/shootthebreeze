import React, { Component } from 'react';
const ReactDOM = require('react-dom');
import MessageInput from './Message-Input';

export default class ClearButton extends Component {
  render() {

    return (

        <button className="btn-clear" onClick={this.props.clearMessageFunction}>Clear</button>
    )
  }
}
