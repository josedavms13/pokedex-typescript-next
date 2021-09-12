import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchPokemons} from '../state'

import styles from '../styles/Home.module.css'

function PokemonList() {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchPokemons())
    },[dispatch])

    return (
        <div className={styles.container}>
            <h1>Aki jue</h1>
            <h4>=S</h4>

        </div>
    );
}

export default PokemonList;