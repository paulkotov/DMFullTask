import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';
import { expect } from 'chai';

const props = {
  addData: function(data){
    return { 
      type: 'ADD_DATA', 
      payload: {
        data: data
      }
    };
  }
};

describe('Header component', () => {
  let output;
  beforeEach(()=> {
    output = shallow(<Header {...props} />);
  });
  it('should have been rendered properly', () => { 
    expect(output.node.type).to.equal('div');
  });
});  
