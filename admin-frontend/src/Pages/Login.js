import React, {useContext} from 'react';
import { Redirect } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

function Login() {  
    const {setIsLoggedIn, login} = useContext(AppContext)  

    return(
        <div className="login">
            <div className="form"> 
                <h1>Blog Login </h1>
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