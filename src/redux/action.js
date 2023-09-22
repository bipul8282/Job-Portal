
import yourApiService from './yourApiServices'; 
 const login = (formData) => {
    return async (dispatch) => {
      try {
       
        
        const user = await yourApiService.login(formData); 
        dispatch(loginSuccess(user));
      } catch (error) {
       
        dispatch(loginFailure(error));
      }
    };
  };
  
  const signup = (formData) => {
    return async (dispatch) => {
      try {
        
        
        
        const user = await yourApiService.signup(formData); 
        console.log(user)
        dispatch(signupSuccess(user));
        
      } catch (error) {
        
        dispatch(signupFailure(error));
      }
    };
  };
  
  
  const loginSuccess = (user) => {
    return {
      type: 'LOGIN_SUCCESS',
      payload: user,
    };
  };
  
  const loginFailure = (error) => {
    return {
      type: 'LOGIN_FAILURE',
      payload: error,
    };
  };
  
  const signupSuccess = (user) => {
    return {
      type: 'SIGNUP_SUCCESS',
      payload: user,
    };
  };
  
  const signupFailure = (error) => {
    return {
      type: 'SIGNUP_FAILURE',
      payload: error,
    };
  };


// Action types
const GET_JOB_DETAILS_REQUEST = 'GET_JOB_DETAILS_REQUEST';
const GET_JOB_DETAILS_SUCCESS = 'GET_JOB_DETAILS_SUCCESS';
const GET_JOB_DETAILS_FAILURE = 'GET_JOB_DETAILS_FAILURE';

// Action creators
const getJobDetailsRequest = () => ({
  type: GET_JOB_DETAILS_REQUEST,
});

const getJobDetailsSuccess = (job) => ({
  type: GET_JOB_DETAILS_SUCCESS,
  payload: job,
});

const getJobDetailsFailure = (error) => ({
  type: GET_JOB_DETAILS_FAILURE,
  payload: error,
});

// Thunk action to get job details
const getJobDetails = (jobId) => {
  return async (dispatch) => {
    try {
      dispatch(getJobDetailsRequest());

      
      const job = await yourApiService.getJobDetails(jobId); 

      dispatch(getJobDetailsSuccess(job));
    } catch (error) {
      dispatch(getJobDetailsFailure(error));
    }
  };
};



  
  export { login , signup, getJobDetails}