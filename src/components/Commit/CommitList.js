import React from "react";

import "./CommitList.css"
import { useGithubCommits, useUserAuth } from "../../providers/Github/index";
import Commit from "./Commit";

const CommitList = () => {
    const { commits, repository } = useGithubCommits()
    const { error } = useUserAuth()
    return (
       Boolean(commits) && <div>
            <div className="Repository-name">
                <h3>{repository}</h3>
            </div>
            {Boolean(commits) && !Boolean(error) && commits.map(commit => <Commit key={commit.sha} data={commit} />)}
        </div>
    )
}

export default CommitList