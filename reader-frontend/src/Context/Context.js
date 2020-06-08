import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

const AppContext = React.createContext()

function AppContextProvider({children}) {
    const [allBlogPosts, setAllBlogPosts] = useState([])
    const [allComments, setAllComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('/api/posts')
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
            value={{allBlogPosts, isLoading}}
        >
            {children}
        </AppContext.Provider>
    )
}

export {AppContextProvider, AppContext}