import {LanguageActionsTypes} from '../actionTypes/languageActions.types'
import {languageActions} from '../actions/language.actions'
import {Dispatch} from "redux";


export const changeToEnglish= ()=>{
    return((dispatch:Dispatch<languageActions>)=>{
        dispatch({
            type: LanguageActionsTypes.CHANGE_TO_ENGLISH
        })
    })
}
export const changeToSpanish= ()=>{
    return((dispatch:Dispatch<languageActions>)=>{
        dispatch({
            type: LanguageActionsTypes.CHANGE_TO_SPANISH
        })
    })
}