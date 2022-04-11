import React from 'react';
import alfa from "../../../logo/alpha logo.png"

import "../../css/loginForm.css"

const LoginForm = (props) => {
    const { value, onchangeEvemt, onUserLogin } = props
    return (
        <div className='loginFormBackground'>
            <div className='loginForm'>
                <div
                    className="alphaLogo"
                >
                    <img style={{ width: "60px", height: "60px" }} src={alfa} />
                </div>

                <form>
                    <div className='input-filed-center'
                    ><input id="email"
                        placeholder='username'
                        name="email" value={value.email} onChange={(e) => onchangeEvemt(e)} />
                    </div>

                    <div
                    className='input-filed-center'
                    ><input id="password" placeholder='password'

                        name="password" type="password" value={value.passowrd} onChange={(e) => onchangeEvemt(e)} />
                    </div>
                    <div  className='logiButton'>                    <button 
                     className='logiButton'
                    onClick={onUserLogin} type="button">Login</button>
                    
                    </div>

                </form>
            </div>
        </div>
    )

}
export default LoginForm
