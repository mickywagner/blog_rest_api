import React from 'react';

function Login() {
    return(
        <div>
            <h1>Please Log In to Enter Admin Site</h1>
            <form>
                <label htmlFor="email">Email:</label>
                <input id="email" name="email" type="email"></input>
                <label htmlFor="password">Password:</label>
                <input id="password" name="password" type="password"></input>
                <button>Log In</button>
            </form>
        </div>
    )
}

export default Login