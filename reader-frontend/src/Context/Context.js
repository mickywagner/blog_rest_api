import React, { useState, useEffect } from 'react'

const AppContext = React.createContext()

function AppContextProvider({children}) {
    const [allBlogPosts, setAllBlogPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://blog-api-072020.herokuapp.com/api/posts')
          .then(response => response.json())
          .then(json => {
            const publishedPosts = json.filter(post => post.isPublished === true) 
            setAllBlogPosts(publishedPosts)
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