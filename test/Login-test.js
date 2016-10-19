import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
import Locus from 'locus';
import LoginUser from '../lib/components/Login';

describe('Login', () => {

  it('renders as a <div>', () => {
    const wrapper = shallow(<LoginUser />)
    assert.equal(wrapper.type(), 'div');
  });

  it('should render a button if no user', () => {
    const wrapper = render(<LoginUser />)
    expect(wrapper.find('button')).to.have.length(1);
  });

});
