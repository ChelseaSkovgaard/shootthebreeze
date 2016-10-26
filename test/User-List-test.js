import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { expect, assert } from 'chai';
import { mount, shallow } from 'enzyme';
import UserList from '../lib/components/User-List';

describe("UserList", () => {

  var array;

  beforeEach(() => {
    array = {
      messages: {
        user: {
          displayName: 'Chelsea Skovgaard',
          email: 'chelseaskovgaard@gmail.com',
          uid: '0728'
        },
        content: 'Broncos Rule'
      }
    }
  })

  it('renders as an <aside>', () => {
    const wrapper = shallow(<UserList messages={[]}/>)
    assert.equal(wrapper.type(), 'aside');
  });

  it('counts the characters of the input field', () => {
    const wrapper = shallow(<UserList messages={array} />)
    expect(wrapper.find('.user-list-user').text()).to.equal('7');
  });

});
