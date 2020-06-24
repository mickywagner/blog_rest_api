import React, {useContext} from 'react';
import { AppContext } from '../Context/AppContext';

function Login() {  
    const {login, message} = useContext(AppContext)
    
    return(
        <div className="login">
            <div className="form"> 
                <h1>Blog Login </h1>
                <p>{message}</p>
                <form id="loginForm" onSubmit={login}> 
                    <input id="email" name="email" type="email" required placeholder="Email"></input>
                    <input id="password" name="password" type="password" required placeholder="Password"></input>
                    <button>Log In</button>
                </form>
            </div>
        </div>
    )
}

export default Login