import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { sortedUniqBy, uniqBy } from 'lodash';

export default class UserList extends Component {

  get uniqueUsers() {
    let users = this.props.messages.map(m => {
      return { userName: m.user.displayName, id: m.user.uid, email: m.user.email};
    });
    let uniqueUsers = uniqBy(users, 'id');
    return sortedUniqBy(uniqueUsers, 'userName');
  }

  lineItem(u, userClass) {
    return (
      <li onClick={() => {this.props.filterUserMessages(u)}}> {u.userName.split(' ').slice(0,1)} {u.email} <span className={userClass}></span></li>
    )
  }

  render() {
    let userListCurrentUser = 'user-list-current-user';
    let userListUser = 'user-list-user';
    return (
      <aside className="user-list">
        <h3 className="user-list-heading">Users</h3>
        <ul>
          {this.uniqueUsers.map(u => {
            if (u.id === this.props.currentUser.uid) {
              return this.lineItem(u, userListCurrentUser)
            } else {
              return this.lineItem(u, userListUser)
            }
          })}
        </ul>
      </aside>
    )
  }
}
