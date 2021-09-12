import {themeAction} from '../actions/themeActions'
import {ActionTypes} from '../actionTypes/themeAction.types'

interface generalAppType {
    theme : string
}

const initialState = {
    theme: 'dark'
}




const themeReducer  =(state:generalAppType = initialState , action:themeAction)=>{
    switch (action.type){
        case ActionTypes.CHANGE_THEME_DARK:
            return {...state, theme : 'dark'}

        case ActionTypes.CHANGE_THEME_LIGHT:
            return {...state, theme : 'light'}

        default :
            return state
    }
}

export default themeReducer