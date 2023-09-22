
const initialState = {
    user: null,            
    isAuthenticated: false, 
    loading: false,        
    error: null,           
  };
  
  const authReducers = (state = initialState, action) => {
    switch (action.type) {
      
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
  
     
      default:
        return state;
    }
  };
  
  export default{ authReducers};
  