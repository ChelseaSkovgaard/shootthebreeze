import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
import Locus from 'locus';
import ClearButton from '../lib/components/Clear-Button';

describe('ClearButton', () => {

  it('renders as a <button>', () => {
    const wrapper = shallow(<ClearButton />)
    assert.equal(wrapper.type(), 'button');
  });
});
