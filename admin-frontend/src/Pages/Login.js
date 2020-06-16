import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';

function Login() {       
    return(
        <div className="login">
            <div className="form"> 
                <h1>Blog Login </h1>
                <form id="loginForm"> 
                    <input id="email" name="email" type="email" required placeholder="Email"></input>
                    <input id="password" name="password" type="password" required placeholder="Password"></input>
                    <button>Log In</button>
                </form>
            </div>
        </div>
    )
}

export default Login