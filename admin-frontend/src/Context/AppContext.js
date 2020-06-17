import React, { useState } from 'react';

const AppContext = React.createContext()

function AppContextProvider({children}) {
    const [isLoggedIn, setIsLoggedIn]= useState(false)
    const [message, setMessage] = useState('')

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
            .then(data => {
                console.log(data)
                setMessage(data.message)
                if(data.message === "Login successful") {
                    setIsLoggedIn(true)
                }
            })
        
    }

    return(
        <AppContext.Provider value={{isLoggedIn, setIsLoggedIn, login, message}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppContextProvider}