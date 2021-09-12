
import {Dispatch} from "redux";

import {ActionTypes} from '../actionTypes/pokemonAction.types'
import {getPokemons} from "../../services/pokemons.get";

export const fetchPokemons = ()=> async (dispatch:Dispatch) =>{
    console.log('fetch made')
    try {
        //services

        const res = await getPokemons();

        dispatch({
            type: ActionTypes.GET_POKEMONS_SUCCESS,
            payload: res.data
        })

    }catch (e){
        console.log('failed')
        dispatch({
            type: ActionTypes.GET_POKEMONS_FAIL,
        })

        throw new Error('Error with fetching')
    }



}