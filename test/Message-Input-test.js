import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert } from 'chai';

import MessageInput from '../lib/components/Message-Input';

describe('MessageInput', () => {

  it('renders as a <input>', () => {
    const wrapper = shallow(<MessageInput />)
    assert.equal(wrapper.type(), 'input');
  });
});
