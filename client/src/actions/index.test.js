import * as types from '../constants/ActionTypes';
import * as actions from './index';
import { expect } from 'chai';

const data = { name:'Bulbasaur', url:'1' };

describe('pokemon actions', () => {
  it('addData should create ADD_DATA action', () => {
    expect(actions.addData(data)).to.deep.equal({
      type: types.ADD_DATA,
      data: {
        name: 'Bulbasaur',
        url: '1'
      }
    });
  });

  it('deleteData should create DELETE_DATA action', () => {
    expect(actions.deleteData()).to.deep.equal({
      type: types.DELETE_DATA,
    });
  });

});
