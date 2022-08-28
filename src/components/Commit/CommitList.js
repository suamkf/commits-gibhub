import React from "react";

import "./CommitList.css"
import { useGithubCommits, useUserAuth } from "../../providers/Github/index";

const CommitList = () => {
    const { commits, repository } = useGithubCommits()
    const { error } = useUserAuth()
    return (
       Boolean(commits) && <div>
            <div className="Repository-name">
                <h3>{repository}</h3>
            </div>
            {Boolean(commits) && !Boolean(error) && commits.map(commit => <div key={ commit.sha}>{JSON.stringify(commit)}</div>)}
        </div>
    )
}

export default CommitList