import React, { useState } from 'react';

const AppContext = React.createContext()

function AppContextProvider({children}) {
    const [isLoggedIn, setIsLoggedIn]= useState(false)

    const login = (e) => {
        e.preventDefault()
        const { email, password } = e.target
        
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: email.value,
                password: password.value
            })
        }
        fetch('/login', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))
    
    }

    return(
        <AppContext.Provider value={{isLoggedIn, setIsLoggedIn, login}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppContextProvider}