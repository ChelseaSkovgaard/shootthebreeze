import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class SortButtons extends Component {

  render() {

    return (
        <div>
          <button className="btn-sort" onClick={this.props.sortMessagesFunction}> Sort ↑ </button>
          <button className="btn-sort" onClick={this.props.sortMessagesFunction}> Sort ↓</button>
        </div>

    )
  }
}
