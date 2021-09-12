import {ActionTypes} from '../actionTypes/pokemonAction.types'
import {pokemonActions} from '../actions/pokemons.actions'

interface Pokemons{
    pokemons: any
}

const initialState = {
    pokemons: []
};

const pokemonReducer = (state:Pokemons = initialState, action:pokemonActions)=>{
    switch (action.type) {

        case ActionTypes.GET_POKEMONS_SUCCESS:
            return {...state, pokemons: action.payload}

        case ActionTypes.GET_POKEMONS_FAIL:
            return initialState

        default:
            return state
    }
}

export default pokemonReducer