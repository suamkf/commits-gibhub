import React from "react";

import GitHubAuthenticationProvider from './GitHubAuthenticationProvider';
import GitHubCommitProvider from "./GitHubCommitProvider";
export  { useGithubCommits } from "./GitHubCommitProvider";
export  { useUserAuth } from './GitHubAuthenticationProvider';

const GithubProvider = ({ children }) => {
    return (
        <GitHubAuthenticationProvider>
            <GitHubCommitProvider>
                {children}
            </GitHubCommitProvider>
        </GitHubAuthenticationProvider>
    )
}

export default GithubProvider;
