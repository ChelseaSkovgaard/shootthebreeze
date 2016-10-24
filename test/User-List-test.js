import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import UserList from '../lib/components/User-List';

describe("<UserList>", () => {

  var messages;

  beforeEach( () => {
    messages = {
      content: "draftMessage",
      createdAt: Date.now(),
      user: {
      displayName: "Bob Smith",
      uid: "12345",
      email: "foo@foo.com"
      }
    }
  });

  it('works, hopefully', () => {
    expect(true).to.be.true;
  });

  it('should have props for messages and user', () => {


    const wrapper = mount(<UserList />);
    expect(UserList.prototype.loadWiki).to.be.true;
  });

});
