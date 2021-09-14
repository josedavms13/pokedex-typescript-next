import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from '../customTypes/reduxTypes'

import {fetchPokemons} from '../state'

import {grid, pokemonCardList} from '../styles/pokemonList/Pokemon-list-card.module.css'

import HeaderBar from "./pokemonListComponents/HeaderBar";
import Footer from "./Footer";
import ListCard from "./pokemonListComponents/ListCard";

function PokemonList() {

    //redux
    const dispatch = useDispatch();
    const pokemons = useSelector((state: RootState) => state.pokemons.pokemons);

    //Fetch Pokemons
    useEffect(() => {
        dispatch(fetchPokemons())
    }, [dispatch])


    //region Pokemon List Handle

    const [toShowPokemons, setToShowPokemons] = useState<any>([]);
    const [filter, setFilter] = useState<string>('');
    useEffect(() => {

        if (pokemons) {
            if (toShowPokemons) {
                if (filter.length > 0) {
                    setToShowPokemons(toShowPokemons.filter((element: any) => {
                        if (filter === '') {
                            return element
                        } else if (element.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())) {
                            return element
                        }

                    }))
                } else {
                    setToShowPokemons(pokemons.sort((a: any, b: any) => {
                        return a.name > b.name ? 1 : -1
                    }));
                }
            }
        }
    }, [pokemons, filter,toShowPokemons]);

    //endregion Pokemon List Handle



    //region Display Modes
    const [displayMode, setDisplayMode] = useState<string>('list');

    useEffect(() => {

        switch (displayMode){
            case 'list' :
                console.log('list');
                setItemsPerPage(7);
                break
            case 'grid' :
                console.log('grid');
                setItemsPerPage(10);
                break
            case 'details' :
                console.log('details');
                setItemsPerPage(4)
                break

        }

    }, [displayMode]);



    //endregion Display Modes


    //region Pagination
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = useState<number>(7);
    const [numberOfPages, setNumberOfPages] = useState<number>(15);

    //Set number of pages depending on the amount of items to display in screen
    useEffect(()=>{
        if(toShowPokemons) {
            setNumberOfPages(Math.floor(toShowPokemons.length / itemsPerPage))
        }
    },[toShowPokemons, itemsPerPage])


    //endregion Pagination


    return (
        <div className={pokemonCardList}>

            <HeaderBar displayModeChange={(displayMode:string)=>setDisplayMode(displayMode)} filterChange={(filterText: string) => setFilter(filterText)}/>

            {toShowPokemons.length > 0 && <div className={grid}>

                {toShowPokemons.slice(currentPage, currentPage + itemsPerPage).map((pokemonItem: any, index: number) => {

                    return (

                        <ListCard key={index} pokemonUrl={pokemonItem.url} name={pokemonItem.name} displayMode={displayMode} />
                    )
                })
                }
            </div>}

            <Footer currentPage={currentPage} totalPages={numberOfPages} onPageChange={(pageNumber:number)=>setCurrentPage(pageNumber)} changeToCurrentPage={(pageNumber:number)=> setCurrentPage(pageNumber)}/>


        </div>
    );
}

export default PokemonList;