import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from '../customTypes/reduxTypes'
import {setUser} from '../state/'

function Login() {


    //Redux
    const language = useSelector((state:RootState) => state.language);
    const dispatch = useDispatch();


    //region Language management
    interface languageObject{
        label: string,
        submitButton: string,
    }
    useEffect(()=>{
        console.log(language)
        switch(language){
            case 'english' :
                setLabelTxt({
                    label: 'Please type your name',
                    submitButton : 'Submit'
                })
                break

            case 'spanish':
                setLabelTxt({
                    label: 'Porfavor ingresa tu nombre',
                    submitButton : 'Enviar'
                })
        }

    },[language])


    const [labelTxt, setLabelTxt] = useState<languageObject>({
        label: 'Please type your name',
        submitButton : 'Submit'
    });
    //endregion Language management



    //region Submit button actions

    // Get data from user input
    const [userInput, setUserInput] = useState<string>('');
    const [disableSubmitButton, setDisableSubmitButton] = useState<boolean>(true);
    useEffect(()=>{
        userInput.length > 3? setDisableSubmitButton(false) : setDisableSubmitButton(true)
    },[userInput])


    function submitName():void{

        dispatch(setUser(userInput));
    }


    //endregion Submit button actions

    return (
        <div>
            <h2>{labelTxt.label}</h2>
            <input onChange={(event => setUserInput(event.target.value))} type="text"/>
            <button onClick={submitName} disabled={disableSubmitButton}>{labelTxt.submitButton}</button>
        </div>
    );
}

export default Login;