const initialState = {
    applicationData: null,
  };
  
  const applicationReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SUBMIT_APPLICATION':
        return {
          ...state,
          applicationData: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default applicationReducer;