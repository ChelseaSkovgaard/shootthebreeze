import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
import Locus from 'locus';
import SubmitButton from '../lib/components/Submit-Button';

describe('SubmitButton', () => {

  it('renders as a <button>', () => {
    const wrapper = shallow(<SubmitButton draftMessageProp={''}/>)
    assert.equal(wrapper.type(), 'button');
  });
});
