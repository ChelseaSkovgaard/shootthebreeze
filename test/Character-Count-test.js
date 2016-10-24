import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
import Locus from 'locus';
import CharacterCount from '../lib/components/Character-Count';


describe('CharacterCount', () => {

  it('renders as a <div>', () => {
    const wrapper = shallow(<CharacterCount draftMessageProp={''}/>)
    assert.equal(wrapper.type(), 'div');
  });

});
