import React, { Component } from 'react';
const ReactDOM = require('react-dom');

export default class SortButtons extends Component {

  render() {

    return (
        <div>
          <button className="btn-sort"> Sort Chron</button>
          <button className="btn-sort"> Sort Revers</button>
        </div>

    )
  }
}
