import React from 'react';
let sinon = require('sinon');
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';

import MessageInput from '../lib/components/Message-Input';

describe('MessageInput', () => {

  it('renders as a <input>', () => {
    const wrapper = shallow(<MessageInput />)
    assert.equal(wrapper.type(), 'input');
  });
  it('call the set draft message state function when changed', () =>{
    let setMessageStateCallback = sinon.spy();
    const wrapper = mount(<MessageInput stateProp={setMessageStateCallback}/>);
    wrapper.find('input').simulate('change');
    wrapper.find('input').simulate('change');
    expect(setMessageStateCallback).to.have.property('callCount',2);
  });
});
