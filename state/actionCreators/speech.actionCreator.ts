import {Dispatch} from "redux";

import { ActionTypes } from '../actionTypes/speechActions.types'


export const setSpeech = (speech:string)=>(dispatch : Dispatch)=>{

    dispatch({
        type: ActionTypes.SET_NEW_SPEECH,
        payload: speech
    })
}