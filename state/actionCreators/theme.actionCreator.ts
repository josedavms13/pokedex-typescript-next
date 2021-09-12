import {ActionTypes} from '../actionTypes/themeAction.types'
import {themeAction} from '../actions/themeActions'
import {Dispatch} from "redux";

export const changeLight = ()=>{
    return (dispatch:Dispatch<themeAction>)=>{
        dispatch({
            type: ActionTypes.CHANGE_THEME_LIGHT
        })
    }
}
export const changeDark = ()=>{
    return (dispatch:Dispatch<themeAction>)=>{
        dispatch({
            type: ActionTypes.CHANGE_THEME_DARK
        })
    }
}