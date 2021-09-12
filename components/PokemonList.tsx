import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from '../customTypes/reduxTypes'

import {fetchPokemons} from '../state'

import styles from '../styles/Home.module.css'
import HeaderBar from "./pokemonListComponents/HeaderBar";
import Footer from "./Footer";

function PokemonList() {

    //redux
    const dispatch = useDispatch();
    const pokemons = useSelector((state: RootState) => state.pokemons.pokemons);

    //Fetch Pokemons
    useEffect(() => {
        dispatch(fetchPokemons())
    }, [dispatch])


    //region Pokemon List Handle

    const [toShowPokemons, setToShowPokemons] = useState([]);
    const [filter, setFilter] = useState<string>('');
    useEffect(() => {
        if (pokemons) {
            console.log(Array.isArray(pokemons));

            setToShowPokemons(pokemons.sort((a: any, b: any) => {
                return a.name > b.name ? 1 : -1
            }));
        }

    }, [pokemons]);

    useEffect(() => {
        console.log(filter);
    }, [filter]);
    //endregion Pokemon List Handle

    //region Display Modes

    const [displayMode, setDisplayMode] = useState<string>('list');

    useEffect(() => {

        switch (displayMode){
            case 'list' :
                console.log('list');
                break
            case 'grid' :
                console.log('grid');
                break
            case 'details' :
                console.log('details');
                break

        }

    }, [displayMode]);



    //endregion Display Modes


    //region Pagination
    const [currentPage, setCurrentPage] = useState<number>(1);
    //endregion Pagination


    return (
        <div style={{'marginTop': '200px'}} >

            <HeaderBar displayModeChange={(displayMode)=>setDisplayMode(displayMode)} filterChange={(filterText: string) => setFilter(filterText)}/>
            {toShowPokemons && <div className="poke-list">

                {toShowPokemons.filter((element: any) => {
                    if (filter === '') {
                        return element
                    } else if (element.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())) {
                        return element
                    }

                }).map((pokemonItem: any, index: number) => {

                    return (

                        <div key={index}>{pokemonItem.name}</div>
                    )
                })}
            </div>}
            <Footer currentPage={currentPage} totalPages={toShowPokemons.length} onPageChange={(pageNumber:number)=>setCurrentPage(pageNumber)}/>
        </div>
    );
}

export default PokemonList;