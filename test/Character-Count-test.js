import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
import Locus from 'locus';
import CharacterCount from '../lib/components/Character-Count';
import MessageInput from '../lib/components/Message-Input';

describe('CharacterCount', () => {

  it('renders as a <div>', () => {
    const wrapper = shallow(<CharacterCount />)
    assert.equal(wrapper.type(), 'div');
  });
});
