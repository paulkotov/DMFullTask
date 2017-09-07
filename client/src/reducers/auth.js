const initialState = 
  { 
    isAuthorized: false
  };

export default function auth(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        profile: action.data,
        isAuthorized: true 
      };

    case 'LOGOUT':
      return state=initialState;
   
    default:
      return state;
  }
}