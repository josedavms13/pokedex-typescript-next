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
    const [pokemonImages, setPokemonImages] = useState<string[]>(['']);
    const [currentImage, setCurrentImage] = useState<string>('');
    console.log(name);
    console.log(pokemonUrl);
    useEffect(()=>{
        getSpecificPokemon(pokemonUrl)
            .then((data:any) => setPokemonFetchResult(data))
            .catch(error => console.log(error))
    },[pokemonUrl])

    useEffect(() => {
        console.log(pokemonFetchResult);

        if (pokemonFetchResult) {
            // @ts-ignore
            setPokemonImages(Object.values(pokemonFetchResult.data.sprites).filter((element: any)=> {
                return typeof element === 'string'
            }))
        }
        
    }, [pokemonFetchResult]);

    useEffect(() => {
        console.log(pokemonImages)
        if(pokemonImages) setCurrentImage(pokemonImages[0]);
    }, [pokemonImages]);



    function alternateImages(){
        const imageIndex = Math.floor(Math.random() * pokemonImages.length)

        setCurrentImage(pokemonImages[imageIndex]);
    }


    return (
        <div>


            {pokemonFetchResult &&
            <div>



                <div className="name">
                    <h6>{name.toUpperCase()}</h6>
                </div>

                <div className="characteristics">

                </div>
                
                <div onClick={alternateImages} className="image">
                    <img src={currentImage} alt={name}/>
                </div>

            </div>
            }


        </div>
    );
}

export default ListCard;