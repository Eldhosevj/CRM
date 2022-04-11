import * as actionTypes from "./actionType"

const initialState = { 
    userDetails:{
        username:"",
        password:"",
        msg:null,
        accessToken:null,
        id:null
    }  ,
    message:null
  };

 

  const loginReducer = (state=initialState , action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            
        
        return {...state,userDetails:action.user,message:action.message}
            default:
              return state
          }
    
  };
  export default loginReducer