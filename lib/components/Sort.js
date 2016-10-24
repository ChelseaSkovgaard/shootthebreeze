import React, { Component } from 'react';
const ReactDOM = require('react-dom');

export default class SortButtons extends Component {

  render() {

    return (
        <div>
          <button className="btn-sort" onClick={this.props.sortMessagesFunction}> Sort Chron</button>
          <button className="btn-sort" onClick={this.props.sortMessagesFunction}> Sort Revers</button>
        </div>

    )
  }
}
