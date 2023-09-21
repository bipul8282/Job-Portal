// Sample auth reducer (initial state, actions, and state mutations)
const initialState = {
    user: null,            // Represents the authenticated user (null if not logged in)
    isAuthenticated: false, // Indicates whether the user is authenticated or not
    loading: false,        // Indicates whether authentication-related operations are in progress
    error: null,           // Stores any authentication-related error messages
  };
  
  const authReducers = (state = initialState, action) => {
    switch (action.type) {
      // Implement authentication-related actions and state mutations here
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          user: action.payload,
          isAuthenticated: true,
          loading: false,
          error: null,
        };
  
      case 'LOGIN_FAILURE':
        return {
          ...state,
          user: null,
          isAuthenticated: false,
          loading: false,
          error: action.payload,
        };
  
      case 'LOGOUT':
        return {
          ...state,
          user: null,
          isAuthenticated: false,
          loading: false,
          error: null,
        };
  
      // Add cases for other authentication-related actions as needed
  
      default:
        return state;
    }
  };
  
  export default{ authReducers};
  