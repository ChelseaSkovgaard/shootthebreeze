import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
let sinon = require('sinon');

import Application from '../lib/components/Application';

describe('Application', () => {

  it('renders as a <div>', () => {
    const wrapper = shallow(<Application />)
    assert.equal(wrapper.type(), 'div');
  });

  it('calls componentDidMount', () => {
   sinon.spy(Application.prototype, 'componentDidMount');
   const wrapper = mount(<Application />);
   expect(Application.prototype.componentDidMount.calledOnce).to.equal(true);
 });

 it('should have a component that filters messages based on the user input in the search field', () => {
  const wrapper = mount(<Application />);
  const input = wrapper.find('.message-field');
  const filterField = wrapper.find('.filter-field');
  wrapper.setState({user: 'Chelsea'});
  wrapper.setState({messages: [{
    user: {
      displayName: 'Chelsea',
      email: 'chelseaskovgaard@gmail.com',
      uid: '0728'
    },
    content: 'Broncos Rule'}
    ,
    {user: {
      displayName: 'Chelsea',
      email: 'chelseaskovgaard@gmail.com',
      uid: '0728'
      },
    content: 'Broncos beat the Texans'
    }
    ,
    {user: {
      displayName: 'Chelsea',
      email: 'chelseaskovgaard@gmail.com',
      uid: '0728'
      },
    content: 'The Patriots are cheaters'
    }
  ]
  }
)
  filterField.simulate('change', {target: {value: 'Broncos'}})
  expect(wrapper.state('filterString')).to.equal('Broncos');
  expect(wrapper.state('filteredMessages').length).to.equal(2);
});

});
