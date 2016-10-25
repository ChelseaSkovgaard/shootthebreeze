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
  it('clears an input when clicked', () =>{
    let clearInputCallback = sinon.spy();
    const wrapper = mount(<ClearButton stateProp={clearInputCallback}/>);
    wrapper.find('button').simulate('click');
    expect(clearInputCallback).to.have.property('callCount',1);
  });
});
