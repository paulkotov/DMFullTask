import { ADD_DATA, DELETE_DATA, LOGIN, LOGOUT, LOADDATA } from '../constants/ActionTypes';

// const initialState = [
//   { name: '',
//     url: ''
//   },
//   {
//     profile: {}
//   }
// ];

const initialState = {
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
        profile: state.profile,
        data: [
          ...action.data,
          ...state.data
        ] 
      };

    case DELETE_DATA:
      return { 
        profile: {
          ...state.profile
        },
        data: [
          { name: ' ',
            url: ' '
          }
        ]
      };

    case LOGIN:
      return {
        profile : action.profile,
        data: [
          ...state.data
        ]  
      };

    case LOGOUT:
      return {
        profile: {},
        data: [
          ...state.data
        ]
      };

    case LOADDATA:
      return {
        profile: state.profile,
        data: [
          ...action.data,
          ...state.data
        ] 
      };

    default:
      return state;
  }
}
