import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {filter} from 'lodash';

export default class FilterField extends Component {
  render() {
    const {filterMessages} = this.props;
    return (
      <input className="filter-field" placeholder="Filter" onChange={(e) => {filterMessages(e.target.value)}}/>
    )
  }
}
