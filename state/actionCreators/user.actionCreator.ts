import {ActionTypes} from '../actionTypes/userActions.types';
import {userActions} from '../actions/userActions'
import {Dispatch} from "redux";


export const setUser = (name: string)=>{

    return (dispatch: Dispatch<userActions>)=>{
        dispatch({
            type: ActionTypes.SET_USER,
            payload: name
        })

    }

}

export const userLogOut = ()=>{

    return(dispatch : Dispatch<userActions>)=>{
        dispatch({
            type: ActionTypes.USER_LOGOUT
        })
    }
}