import React from 'react';
import {sortedBy, uniqBy} from 'lodash';

export default class UserList extends Component {
  debugger;
  uniqueUsers() {
    let users = this.props.messages(m => {
      return { userName: m.user.displayName, id: m.user.uid, email: m.user.email};
    });
    let uniqueUsers = uniqBy(users, 'id');
    return sortedBy(uniqueUsers, 'userName');
  }

  render() {
    return (
      <aside className="user-list">
        <h3>Users</h3>
        <ul>
          {this.uniqueUsers.map(u => {
            return <li className="user-list-user">{u.userName} {u.email}></li>
          })}
        </ul>
      </aside>
    )
  }
}
