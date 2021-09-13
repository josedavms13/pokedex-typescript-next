import Image from "next/image";
import React, {useEffect, useState} from 'react';
import {getSpecificPokemon} from '../../services/pokemons.get'
import {firstLetterCapitalize} from "../../utils/firstLetterCapitalize";


interface pokemonCardList{
    pokemonUrl : string,
    name: string
}

function ListCard({name, pokemonUrl}:pokemonCardList) {

    const [pokemonFetchResult, setPokemonFetchResult] = useState<any>(null);

    console.log(name);
    console.log(pokemonUrl);
    useEffect(()=>{
        getSpecificPokemon(pokemonUrl)
            .then((data:any) => setPokemonFetchResult(data))
            .catch(error => console.log(error))
    },[pokemonUrl])

    useEffect(() => {
        console.log(pokemonFetchResult);
    }, [pokemonFetchResult]);




    return (
        <div>


            {pokemonFetchResult &&
            <div>



                <div className="name">
                    <h6>{name.toUpperCase()}</h6>
                </div>

                <div className="characteristics">

                </div>

            </div>
            }


        </div>
    );
}

export default ListCard;