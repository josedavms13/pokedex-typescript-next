import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchPokemons} from '../state'

function PokemonList() {


    useEffect(()=>{
        fetchPokemons();
    },[])

    const something = useSelector(state=> state)

    console.log(something)


    return (
        <div>

        </div>
    );
}

export default PokemonList;