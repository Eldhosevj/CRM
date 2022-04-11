import * as actionTypes from "./actionType"
import axios from "axios"
import * as path from "../../../sharedModules/path/path"
const loginAcitonTypes = (user, message = null) => {
    return {
        type: actionTypes.LOGIN,
        user: user,
        message: message
    }
}


export const userLogin = (value) => {

    return dispatch => {
        value.username = value.email
        return axios.post(path.LOGIN, value)
        .then((res) => {
            

            return dispatch(loginAcitonTypes(res.data))
        }).catch((res) => {
            return dispatch(loginAcitonTypes(res.data, "error"))
        })
    }
}