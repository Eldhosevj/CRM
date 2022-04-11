import { combineReducers } from 'redux';
import loginReducer from '../../modules/Login/store/reducer';
import loginRecord from "../../modules/FullProjectRecordTable/store/reducer"
export default combineReducers({
 login:loginReducer,
 userRecord:loginRecord
});