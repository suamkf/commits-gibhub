import React, { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

import { useUserAuth } from "./GitHubAuthenticationProvider"



const GithubCommitContext = createContext();

const repository = "commits-gibhub"
export const useGithubCommits = () => {
    const response = useContext(GithubCommitContext)
    return response
}

const GitHubCommitProvider = ({ children }) => {
    const [commits, setCommits] = useState(null)
    const { userData, error,token } = useUserAuth();
    const { login } = userData

    const fetchUsers = (userName, token) => {
        const url = `https://api.github.com/repos/${userName}/${repository}/commits`
        axios.get(url, {
            'headers': {
                'Authorization': `token ${token}`,
            }
        }).then(({ data }) => { setCommits(data) })

    }

    useEffect(() => {
        if (userData && login && token) fetchUsers(login, token)
        if (error || !Boolean(token)) setCommits(null)
    }, [login, error,token]);

    return (
        <GithubCommitContext.Provider value={{ commits , repository}}>
            {children}
        </GithubCommitContext.Provider>
    )
}
export default GitHubCommitProvider;

