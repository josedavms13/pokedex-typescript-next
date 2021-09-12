import React from 'react';
import {useDispatch} from "react-redux";
import {changeLight, changeDark, changeToEnglish, changeToSpanish} from '../state'

function Header() {

    const dispatch = useDispatch();

    return (
        <div>
            <div className="theme">
                <button onClick={() => dispatch(changeLight())}>Light Theme</button>
                <button onClick={() => dispatch(changeDark())}>Dark Theme</button>
            </div>
            <div className="language">
                <button onClick={()=>dispatch(changeToEnglish())}>English</button>
                <button onClick={()=>dispatch(changeToSpanish())}>Spanish</button>
            </div>
        </div>
    );
}

export default Header;