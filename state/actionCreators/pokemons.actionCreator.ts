
import {Dispatch} from "redux";

import {ActionTypes} from '../actionTypes/pokemonAction.types'

export const fetchPokemons = ()=> async (dispatch:Dispatch) =>{

    try {
        //services

        let res:any;

        dispatch({
            type: ActionTypes.GET_POKEMONS_SUCCESS,
            payload: res
        })

    }catch (e){
        dispatch({
            type: ActionTypes.GET_POKEMONS_FAIL,
        })

        throw new Error('Error with fetching')
    }



}