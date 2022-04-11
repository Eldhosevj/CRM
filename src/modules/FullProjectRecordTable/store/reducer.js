import * as actionTypes from "./actionType"

const initialState = { 
    table:[],
    message:null,
    row:{}
  };

 

  const loginRecord = (state=initialState , action) => {
    switch (action.type) {
        case actionTypes.USER_DETAILS:
            
        return {...state,userDetails:action.table,message:action.message}
        case actionTypes.GET_SINGLE_RECORD:   
        return {...state,row:action.row}
        default:
              return state
          }
    
  };
  export default loginRecord 