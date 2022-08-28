import React from "react";
import "./Commit.css"
const Commit = ({ data }) => {
    const { commit: { author: { date = "", name = "" } = {}, message = "" } = {} } = data
    return (
        <div className="Commit-container">
            <div className="Commit-info">
                <div className="Commit-messsage">
                    {message}
                </div>
                <div className="Commit-date">
                    {`${date} by ${name}`}
                </div>
            </div>

        </div>
    )
}

export default React.memo(Commit)