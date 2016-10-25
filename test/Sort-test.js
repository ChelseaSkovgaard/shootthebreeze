import React from 'react';
let sinon = require('sinon');
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
import SortButtons from '../lib/components/Sort';

describe('SortButtons', () => {

  it('renders as a <div>', () => {
    const wrapper = shallow(<SortButtons />)
    assert.equal(wrapper.type(), 'div');
    wrapper.find('button');
  });

  it('renders two buttons', () => {
    const wrapper = shallow(<SortButtons />)
    const buttons = wrapper.find('button');
    expect(buttons.length).to.equal(2);
  });
});
