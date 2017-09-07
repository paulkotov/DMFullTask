import pokemons from './pokemons';
import * as types from '../constants/ActionTypes';
import { expect } from 'chai';

describe('Pokemons reducer', () => {
  it('should handle initial state', () => {
    expect(
      pokemons(undefined, {})
    ).to.deep.equal([
      {
        name: '',
        url: ''
      }
    ]);
  });

  it('should handle ADD_DATA', () => {
    expect(
      pokemons([
        {
          name: '',
          url: ''
        }], {
          type: types.ADD_DATA,
          data: {
            name: 'bulbasaur',
            url: 'localhost:300'
          }
        })
    ).to.deep.equal([
      {
        name: '',
        url: ''
      }
    ]);
  });

  it('should handle DELETE_DATA', () => {
    expect(
      pokemons([
        {
          name: 'bul',
          url: '1'
        }, {
          name: 'ivy',
          url: '2'
        }
      ], {
        type: types.DELETE_DATA,
      })
    ).to.deep.equal([
      {
        name: '',
        url: ''
      }
    ]);
  });
});