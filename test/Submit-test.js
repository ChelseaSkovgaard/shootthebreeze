import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
import Locus from 'locus';
let sinon = require('sinon');

import SubmitButton from '../lib/components/Submit-Button';

describe('SubmitButton', () => {

  it('renders as a <button>', () => {
    const wrapper = shallow(<SubmitButton draftMessageProp={''}/>)
    assert.equal(wrapper.type(), 'button');
  });

  it('submits input when clicked', () =>{
    let addMessageCallback = sinon.spy();
    const wrapper = mount(<SubmitButton addMessageFunction={addMessageCallback}/>);
    wrapper.find('button').simulate('click');
    expect(addMessageCallback).to.have.property('callCount', 1);
  });
});
