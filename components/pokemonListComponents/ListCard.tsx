import Image from "next/image";
import React, {useEffect, useState} from 'react';
import {getSpecificPokemon} from '../../services/pokemons.get'
import {firstLetterCapitalize} from "../../utils/firstLetterCapitalize";
import {useSelector} from "react-redux";
import {RootState} from "../../customTypes/reduxTypes";
import {decimetersToMeters, hectogramsToKilograms} from '../../utils/unitsConversion'

interface pokemonCardList{
    pokemonUrl : string,
    name: string
}

function ListCard({name, pokemonUrl}:pokemonCardList) {

    const [pokemonFetchResult, setPokemonFetchResult] = useState<any>(null);
    const [pokemonImages, setPokemonImages] = useState<string[]>(['']);
    const [currentImage, setCurrentImage] = useState<string>('');

    //Get particular pokemon info
    useEffect(()=>{
        getSpecificPokemon(pokemonUrl)
            .then((data:any) => setPokemonFetchResult(data))
            .catch(error => console.log(error))
    },[pokemonUrl])

    // Filter sprites / Removing Null values and object types
    useEffect(() => {
        console.log(pokemonFetchResult)
        if (pokemonFetchResult) {
            // @ts-ignore
            setPokemonImages(Object.values(pokemonFetchResult.data.sprites).filter((element: any)=> {
                return typeof element === 'string'
            }))
        }
        
    }, [pokemonFetchResult]);


    // Initialize default sprite to show
    useEffect(() => {
        if(pokemonImages) setCurrentImage(pokemonImages[0]);
    }, [pokemonImages]);



    function alternateImages():number{
        return Math.floor(Math.random() * pokemonImages.length)
    }



    //region Language management


    const language = useSelector((state:RootState)=>state.language);
    const [labelText, setLabelText] = useState<any>({
        typeTitle: 'Main Type',
        physicCharacteristics: {
            tittle:'Physical Characteristics',
            weight : 'Weight',
            height: 'Height'
        }
    });
    useEffect(()=>{

        switch (language) {
            case 'spanish':

                setLabelText({
                    ...labelText,
                    typeTitle: 'Tipo principal',
                    physicCharacteristics: {
                        tittle:'Características físicas',
                        weight : 'Peso',
                        height: 'Altura'
                    }
                })
                break
            case 'english':

                setLabelText({
                    ...labelText,
                    typeTitle: 'Main Type',
                    physicCharacteristics: {
                        tittle:'Physical Characteristics',
                        weight : 'Weight',
                        height: 'Height'
                    }
                })
                break


        }

    },[language, labelText])



    //endregion Language management





    return (
        <div>


            {pokemonFetchResult &&
            <div>



                <div className="name">
                    <h6>{name.toUpperCase()}</h6>
                </div>

                <div className="characteristics">
                    <div className="types">
                        <h6>{labelText.typeTitle}</h6>
                        {firstLetterCapitalize(pokemonFetchResult.data.types[0].type.name)}
                    </div>

                    <div className="physic-characteristics">
                        <h6>{labelText.physicCharacteristics.title}</h6>
                        <span><b>{labelText.physicCharacteristics.height}:</b> {decimetersToMeters(pokemonFetchResult.data.height)} m</span>
                        <span><b>{labelText.physicCharacteristics.weight}:</b> {hectogramsToKilograms(pokemonFetchResult.data.weight)} Kg</span>

                    </div>

                </div>
                
                <div onClick={()=>{setCurrentImage(pokemonImages[alternateImages()])}} className="image">
                    <img src={currentImage} alt={name}/>
                </div>

            </div>
            }


        </div>
    );
}

export default ListCard;