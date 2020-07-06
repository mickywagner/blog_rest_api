import React, { useState } from 'react';

const AppContext = React.createContext()

function AppContextProvider({children}) {
    const [isLoggedIn, setIsLoggedIn]= useState(false)
    const [message, setMessage] = useState('')
    const [user, setUser] = useState('')
    const [allPosts, setAllPosts] = useState([])
    const [allComments, setAllComments] = useState([])

    const apiURL = 'https://blog-api-072020.herokuapp.com/'

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
                setMessage(data.message)
                if(data.message === "Login successful") {
                    setIsLoggedIn(true)
                    setMessage('')
                    setUser(data.userForToken.username)
                }
            })  
    }

    const getAllPosts = async () => {
        const response = await fetch(`${apiURL}/posts`)
        const data = await response.json()
        setAllPosts(data)
    }

    const getAllComments = async () => {
        const response = await fetch(`${apiURL}/comments`)
        const data = await response.json()
        setAllComments(data)
    }

    return(
        <AppContext.Provider value={{
            login,
            user,
            setUser,
            setIsLoggedIn, 
            isLoggedIn, 
            message, 
            getAllPosts, 
            setAllPosts,
            allPosts, 
            getAllComments,
            setAllComments,
            allComments
        }}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppContextProvider}