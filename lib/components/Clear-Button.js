import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ClearButton extends Component {
  render() {

    return (
        <button className="btn-clear"
        disabled={this.props.draftMessageProp === ''}
        onClick={this.props.clearMessageFunction}>Clear</button>
    )
  }
}
