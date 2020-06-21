import React, { useState } from 'react';

const AppContext = React.createContext()

function AppContextProvider({children}) {
    const [isLoggedIn, setIsLoggedIn]= useState(false)
    const [message, setMessage] = useState('')
    const [user, setUser] = useState('')
    const [allPosts, setAllPosts] = useState([])
   

    const apiURL = 'http://localhost:3001/api'

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

    const getAllPosts = async () => {
        const response = await fetch(`${apiURL}/posts`)
        const data = await response.json()
        setAllPosts(data)
    }

    return(
        <AppContext.Provider value={{
            isLoggedIn, 
            setIsLoggedIn, 
            login, 
            message, 
            getAllPosts, 
            allPosts, 
            setAllPosts
        }}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppContextProvider}