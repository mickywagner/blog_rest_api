import React, { useState, useEffect } from 'react'

const AppContext = React.createContext()

function AppContextProvider({children}) {
    const [allBlogPosts, setAllBlogPosts] = useState([])
    const [allComments, setAllComments] = setAllComments([])

    return(
        <AppContext.Provider
            value={{allBlogPosts}}
        >
            {children}
        </AppContext.Provider>
    )
}

export {AppContextProvider, AppContext}