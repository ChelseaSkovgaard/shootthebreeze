import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';

import MessageList from '../lib/components/Message-List';

describe('MessageList', () => {

  it('renders as a <div>', () => {
    const wrapper = shallow(<MessageList />)
    assert.equal(wrapper.type(), 'div');
  });
  });
