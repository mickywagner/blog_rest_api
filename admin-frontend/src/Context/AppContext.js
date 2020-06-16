import React, { useState } from 'react';

const AppContext = React.createContext()

function AppContextProvider({children}) {
    const [isLoggedIn, setIsLoggedIn]= useState(false)

    return(
        <AppContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppContextProvider}