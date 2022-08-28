import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthUserContext = createContext();
const user = "suamkf"
export const useUserAuth = () => {
    const response = useContext(AuthUserContext)
    return response
}
const AuthenticationGitHubProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [userData, setUserData] = useState({})
    const [error, setError] = useState(false)
    const fetchUsers = (token) => {
         axios.get('https://api.github.com/search/users?q=' + user, {
            'headers': {
                'Authorization': `token ${token}`
            }
        })
            .then(({ data }) => { setUserData(data.items.shift()); setError(false) })
            .catch(()=> {
                setUserData({})
                setError(true)
            })

    }
    useEffect(() => {
        if (token) {
            fetchUsers(token)
        } else {
            setUserData({})
            setError(false)
        }
    }, [token])

    return (
        <AuthUserContext.Provider value={{ userData, error, token, setToken}}>
            {children}
        </AuthUserContext.Provider>
    )
}
export default AuthenticationGitHubProvider;