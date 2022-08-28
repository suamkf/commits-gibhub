import React from "react";
import "./UserInfo.css"
import { useUserAuth } from "../../providers/Github/index";

const UserInfo = () => {
    const { userData } = useUserAuth();
    const { avatar_url = "", login = "", html_url = "" } = userData;

    return (
        Boolean(avatar_url) && <div className="User-Info-Container">
            <div>
                <img className="Avatar-image" src={avatar_url} />
            </div>
            <div className="User-info">
                <div>
                    {login}
                </div>
                <div>
                    <a href={html_url} target="_blank" >Github repository</a>
                </div>
            </div>
        </div>
    )
}

export default UserInfo;