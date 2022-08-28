import "./UserToken.css"
import React, { useState, useRef, useEffect } from "react";

import { useGithubCommits, useUserAuth } from "../../providers/Github/index";
import Alert, { TYPES } from "../Alert/index";
const initialCount = 30;
const UserToken = () => {
    const [inputText, setInputText] = useState("")
    const [count,setCount ]= useState(initialCount)
    const { setToken, error } = useUserAuth()
    const inputElement = useRef()
    const { commits } = useGithubCommits()
    const handlerInput = () => {
        setInputText(inputElement.current.value)
    }
    const message = error ? "Wrong Token, please type a valid one" : !Boolean(commits) ? "please, type a token" : "Token Ok"
    const type = error ? TYPES.ERROR : !Boolean(commits) ? TYPES.NONE : TYPES.OK

    useEffect (()=>{
        const interval = setInterval(()=>setCount(count-1),1000)
        return ()=> clearInterval(interval)
    })
    useEffect (()=>{
        if(count === 0) {
            setCount(initialCount)
            setToken(Boolean(inputText) ? inputText : null)
        }
    },[count])
    return (
        <div>
            <div className="Container">
                <input className="InputText" type="text" ref={inputElement} onChange={handlerInput} />
                <button onClick={() => setToken(inputText)}>{`Get commits ${count}`}</button> 
            </div>
            <div className="Alert">
                <Alert message={message} type={type} />
            </div>
        </div>
    )
}

export default UserToken;