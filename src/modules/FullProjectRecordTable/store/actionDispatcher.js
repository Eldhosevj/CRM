import * as actionTypes from "./actionType"
import axios from "axios"
import * as path from "../../../sharedModules/path/path"
import { tab } from "@testing-library/user-event/dist/tab"
const userRecord = (table, message = null) => {
    return {
        type: actionTypes.USER_DETAILS,
        table: table?[table.data]:[],
        message: message
    }
}
 
export const getSingleRecord = (row) => {
    return {
type:actionTypes.GET_SINGLE_RECORD,
        row:row
    }
}

export const getUserRecord = (id) => {

    return dispatch => {
        
        return axios.get(path.TABLE+"/"+id)
        .then((res) => {
            

            return dispatch(userRecord(res.data))
        }).catch((res) => {
            return dispatch(userRecord(res.data, "error"))
        })
    }
}