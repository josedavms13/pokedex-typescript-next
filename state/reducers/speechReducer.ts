import {ActionTypes} from '../actionTypes/speechActions.types'
import {speechActions} from '../actions/speech.actions'


const InitialState = '';

const speechReducer = (state: string = InitialState, action:speechActions)=>{

    switch (action.type) {
        case ActionTypes.SET_NEW_SPEECH:
            return action.payload

        default:
            return state
    }

}
export default speechReducer