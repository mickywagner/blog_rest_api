import React, { useState, useEffect } from 'react'

const AppContext = React.createContext()

function AppContextProvider({children}) {
    const [allBlogPosts, setAllBlogPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:3001/api/posts')
          .then(response => response.json())
          .then(json => {
            setAllBlogPosts(json)
            setIsLoading(false)
          }
          )
          .catch(err => console.log(err))
    }, [])

    return(
        <AppContext.Provider
            value={{allBlogPosts, isLoading, setIsLoading}}
        >
            {children}
        </AppContext.Provider>
    )
}

export {AppContextProvider, AppContext}