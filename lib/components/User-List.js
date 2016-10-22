import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { sortedUniqBy } from 'lodash';

export default class UserList extends Component {

  get uniqueUsers() {
    let users = this.props.messages.map(m => {
      return { userName: m.user.displayName, id: m.user.uid, email: m.user.email};
    });
    return sortedUniqBy(users, 'userName');
  }

  render() {
    return (
      <aside className="user-list">
        <h3>Users</h3>
        <ul>
          {this.uniqueUsers.map(u => {
            return <li className="user-list-user">{u.userName} ({u.email})</li>
          })}
        </ul>
      </aside>
    )
  }
}
