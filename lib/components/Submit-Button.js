import React, { Component } from 'react';
const ReactDOM = require('react-dom');

export default class SubmitButton extends Component {
  render() {
    return (
        <button className="btn-submit" onClick={this.props.addMessageFunction}>Submit</button>
    )
  }
}
