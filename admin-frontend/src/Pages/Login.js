import React from 'react';

function Login() {
    return(
        <div className="login">
            <div className="form"> 
                <h1>Blog Login </h1>
                <form onSubmit={console.log('POST REQUEST TO /LOGIN')}> 
                    <input id="email" name="email" type="email" required placeholder="Email"></input>
                    <input id="password" name="password" type="password" required placeholder="Password"></input>
                    <button>Log In</button>
                </form>
            </div>
        </div>
    )
}

export default Login