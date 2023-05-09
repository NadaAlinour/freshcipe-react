// will probably amend
// did not test here yet
// remember to wrap app with provider
import { useState, useContext, createContext } from "react";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider(props) {
    const [authName, setAuthName] = useState(null);
    const [authId, setAuthId] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const value = {
        authName,
        setAuthName,
        authId,
        setAuthId,
        isLoggedIn,
        setIsLoggedIn
    }

    return(
        <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
    )
}