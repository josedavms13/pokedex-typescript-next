import {languageActions} from '../actions/language.actions'
import {LanguageActionsTypes} from '../actionTypes/languageActions.types'

const initialState = 'english'

const languageReducer = (state: string = initialState, action: languageActions)=>{

    switch (action.type){
        case LanguageActionsTypes.CHANGE_TO_ENGLISH:
            return 'english'
        case LanguageActionsTypes.CHANGE_TO_SPANISH:
            return 'spanish'

        default:
            return state
    }

}

export default languageReducer