import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
import Locus from 'locus';
import ClearButton from '../lib/components/Clear-Button';
let sinon = require('sinon');

describe('ClearButton', () => {

  it('renders as a <button>', () => {
    const wrapper = shallow(<ClearButton />)
    assert.equal(wrapper.type(), 'button');
  });

  it('clears input when clicked', () =>{
    let clearMessageCallback = sinon.spy();
    const wrapper = mount(<ClearButton clearMessageFunction={clearMessageCallback}/>);
    wrapper.find('button').simulate('click');
    expect(clearMessageCallback).to.have.property('callCount', 1);
  });

});
