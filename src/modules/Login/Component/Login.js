import React from 'react';
import { NavLink } from 'react-router-dom'
import axios from "axios"
import {userLogin} from "../store/actionDispatcher"
import {useDispatch,useSelector } from "react-redux"
import LoginForm from "./LoginForm"
import { useNavigate } from 'react-router-dom';
const UserLogin = (props) => {
    let navigate = useNavigate();
   
    const [value, setValue] = React.useState(
        {
            email: "",
            password: "",

        }
    )
const userDetails=useSelector(state=>{
    return state.login
})
    const dispatch = useDispatch()
    
    const loginRequest=(value=>dispatch(userLogin(value)))

    const onUserLogin=()=>{
        loginRequest(value)
    }

    const [error, setError] = React.useState("")

    const onchangeEvemt = (e) => {
    
        setValue({ ...value, [e.target.name]: e.target.value })
    }
React.useEffect(()=>{
if(userDetails&&userDetails.userDetails&&userDetails.userDetails.accessToken){
   userDetails.userDetails.accessToken=true
   userDetails.userDetails.refreshToken=true
    window.localStorage.setItem("loginUser",JSON.stringify(userDetails.userDetails))
    navigate("/DashBord")
}
},[userDetails])    
   
    return (<div style={{ width: "200px" }}>
        <div>
            {error}

        </div>
        
        <LoginForm 
            value={value}
            onchangeEvemt={onchangeEvemt}
            onUserLogin={onUserLogin}
        />
       
       {/* <NavLink to="/">User Home</NavLink>
       */}
    </div>)

}

export default  UserLogin