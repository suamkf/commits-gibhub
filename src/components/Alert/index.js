import React from "react";
import "./index.css";
export const TYPES = {
    ERROR: "ERROR",
    OK: "OK",
    NONE: "NONE"
}
const Alert = ({ type, message }) => {
    let classType;
    switch (type) {
        case TYPES.ERROR:
            classType = TYPES.ERROR;
            break;
        case TYPES.OK:
            classType = TYPES.OK;
            break;
        default:
            classType = TYPES.NONE;
    }
    return (
        <div className={classType}>
            {message}
        </div>
    )
};

export default Alert