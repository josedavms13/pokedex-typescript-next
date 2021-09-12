import {userActions} from '../actions/userActions'
import {ActionTypes} from '../actionTypes/userActions.types'

interface User {
    name : string,
    payload?: string
}

const initialState : User = {
    name: ''
}


const userReducer  =(state:User = initialState , action:userActions)=>{
    switch (action.type){
        case ActionTypes.SET_USER:
            return {...state, name : action.payload}

        case ActionTypes.USER_LOGOUT:
            return initialState

        default :
            return state
    }
}

export default userReducer