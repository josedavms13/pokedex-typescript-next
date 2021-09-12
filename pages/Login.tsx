import React, {useEffect} from 'react';
import {useSelector} from "react-redux";

function Login() {
    // @ts-ignore
    const language = useSelector(state => state.language);
    useEffect(()=>{
        console.log(language)
    },[language])
    return (
        <div>
            {language}
        </div>
    );
}

export default Login;