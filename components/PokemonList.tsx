import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from '../customTypes/reduxTypes'

import {fetchPokemons} from '../state'

import styles from '../styles/Home.module.css'
import HeaderBar from "./pokemonListComponents/HeaderBar";

function PokemonList() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPokemons())
    }, [dispatch])

    const pokemons = useSelector((state: RootState) => state.pokemons.pokemons.results);

    const [toShowPokemons, setToShowPokemons] = useState([]);
    const [filter, setFilter] = useState<string>('');
    useEffect(() => {
        console.log(Array.isArray(pokemons));

        setToShowPokemons(pokemons.sort((a: any, b: any) => {
            return a.name > b.name ? 1 : -1
        }));

    }, [pokemons,]);

    useEffect(() => {
        console.log(filter);
    }, [filter]);


    return (
        <div style={{'marginTop': '200px'}} >

            <HeaderBar filterChange={(filterText: string) => setFilter(filterText)}/>
            <div className="poke-list">

                {toShowPokemons.filter((element : any) => {
                    if (filter === '') {
                        return element
                    } else if (element.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())) {
                        return element
                    }

                }).map((pokemonItem : any, index:number) => {

                    return (

                        <div key={index}>{pokemonItem.name}</div>
                    )
                })}


            </div>

        </div>
    );
}

export default PokemonList;