import React, { createContext } from "react";
import { useState } from 'react';


const AuthContext = createContext(undefined)
const SetAuthContext = createContext(undefined)

const  AuthContextComponent = ({children}) => {
    const [userDetail, setUserDetail] = useState({});
    return (
        <AuthContext.Provider value={userDetail}>
            <SetAuthContext.Provider value={setUserDetail}>
                {children}
            </SetAuthContext.Provider>
        </AuthContext.Provider>
    )
}
export { AuthContext, SetAuthContext, AuthContextComponent }