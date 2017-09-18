import { ADD_DATA, DELETE_DATA, LOGIN, LOGOUT, LOADDATA } from '../constants/ActionTypes';

const initialState = {
  own: false,
  profile: {},
  data: [
    { name: ' ',
      url: ' '
    }
  ]
};

export default function pokemons(state = initialState, action) {
  switch (action.type) {
    case ADD_DATA:
      return {
        own: false,
        profile: state.profile,
        data: [
          ...action.data
        ] 
      };

    case DELETE_DATA:
      return {
        own: state.own, 
        profile: state.profile,
        data: [
          { name: ' ',
            url: ' '
          }
        ]
      };

    case LOGIN:
      return {
        own: state.own,
        profile : action.profile,
        data: [
          ...state.data
        ]  
      };

    case LOGOUT:
      return {
        own: state.own,
        profile: {},
        data: [
          ...state.data
        ]
      };

    case LOADDATA:
      return {
        own: true,
        profile: state.profile,
        data: [
          ...action.savedData,
        ] 
      };

    default:
      return state;
  }
}
