import React, {useEffect, useState} from 'react';
import {getSpecificPokemon} from '../../services/pokemons.get'
import {firstLetterCapitalize} from "../../utils/firstLetterCapitalize";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../customTypes/reduxTypes";
import {decimetersToMeters, hectogramsToKilograms} from '../../utils/unitsConversion'
import getFourAbilitiesIfExist from "../../utils/getFourAbilitiesIfExist";
import {card} from '../../styles/Home.module.css'
import {setSpeech} from '../../state'

interface pokemonCardList {
    pokemonUrl: string,
    name: string,
    displayMode: string
}

function ListCard({name, pokemonUrl, displayMode}: pokemonCardList) {

    const dispatch = useDispatch();

    const [pokemonFetchResult, setPokemonFetchResult] = useState<any>(null);
    const [pokemonImages, setPokemonImages] = useState<string[]>(['']);
    const [currentImage, setCurrentImage] = useState<string>('');
    const [abilitiesToShow, setAbilitiesToShow] = useState<string[]>(['']);


    //Get particular pokemon info
    useEffect(() => {
        getSpecificPokemon(pokemonUrl)
            .then((data: any) => setPokemonFetchResult(data))
            .catch(error => console.log(error))
    }, [pokemonUrl])

    //region Card Images
    // Filter Sprites // Assign abilities to show
    useEffect(() => {
        if (pokemonFetchResult) {

            // Filter sprites / Removing Null values and object types
            // @ts-ignore
            setPokemonImages(Object.values(pokemonFetchResult.data.sprites).filter((element: any) => {
                return typeof element === 'string'
            }))

            // Assign abilities to Show
            setAbilitiesToShow(getFourAbilitiesIfExist(pokemonFetchResult.data.moves));


        }

    }, [pokemonFetchResult]);



    // Initialize default sprite to show
    useEffect(() => {
        if (pokemonImages) setCurrentImage(pokemonImages[2]);
    }, [pokemonImages]);


    function alternateImages(): number {
        return Math.floor(Math.random() * pokemonImages.length)
    }

    //endregion Card Images

    //region Language management


    const language = useSelector((state: RootState) => state.language);
    const [labelText, setLabelText] = useState<any>({
        typeTitle: 'Main Type',
        physicCharacteristics: {
            tittle: 'Physical Characteristics',
            weight: 'Weight',
            height: 'Height'
        }
    });


    //Changes labels depending on language
    useEffect(() => {

        switch (language) {
            case 'spanish':

                setLabelText({
                    typeTitle: 'Tipo principal',
                    physicCharacteristics: {
                        tittle: 'Caracter??sticas f??sicas',
                        weight: 'Peso',
                        height: 'Altura'
                    }
                })
                break
            case 'english':

                setLabelText({
                    typeTitle: 'Main Type',
                    physicCharacteristics: {
                        tittle: 'Physical Characteristics',
                        weight: 'Weight',
                        height: 'Height'
                    }
                })
                break


        }

    }, [language])

    const [cardSpeech, setCardSpeech] = useState<string>('');

    // Set speech depending on language
    useEffect(() => {
        if (pokemonFetchResult) {
            switch (language) {

                case 'english':
                    setCardSpeech(
                        `
                        ${name}, a pokemon type of ${pokemonFetchResult.data.types[0].type.name}. Their average weight is ${hectogramsToKilograms(pokemonFetchResult.data.weight)} kilograms and can grow up to ${decimetersToMeters(pokemonFetchResult.data.height)} meters. Its main move are ${abilitiesToShow[0]} and ${abilitiesToShow[1]}  
                        `
                    )
                    break

                case 'spanish':
                    setCardSpeech(`${name}, un pokemon de tipo ${pokemonFetchResult.data.types[0].type.name}. Suelen pesar alrededor de ${hectogramsToKilograms(pokemonFetchResult.data.weight)} kilogramos y crecer hasta ${decimetersToMeters(pokemonFetchResult.data.height)} metros. Sus movimientos principales son ${abilitiesToShow[0]} y ${abilitiesToShow[1]}`)
                    break

            }
        }

    }, [abilitiesToShow, name, language, pokemonFetchResult])


    //endregion Language management


    return (
        <div>


            {pokemonFetchResult &&
            <div className={card}>


                <div className="name">
                    <h6>{name.toUpperCase()}</h6>
                </div>

                <div className="characteristics">
                    <div onClick={() => dispatch(setSpeech(cardSpeech))} className="poke-info">
                        <div className="types">
                            <h6>{labelText.typeTitle}</h6>
                            {firstLetterCapitalize(pokemonFetchResult.data.types[0].type.name)}
                        </div>

                        <div className="physic-characteristics">
                            <h6>{labelText.physicCharacteristics.title}</h6>
                            <span><b>{labelText.physicCharacteristics.height}:</b> {decimetersToMeters(pokemonFetchResult.data.height)} m</span>
                            <span><b>{labelText.physicCharacteristics.weight}:</b> {hectogramsToKilograms(pokemonFetchResult.data.weight)} Kg</span>

                        </div>

                        {displayMode === 'details' &&
                        <div className="details-moves">
                            <ul>
                                {
                                    abilitiesToShow.map((ability: string, index: number) => {
                                        return <li key={index}>{firstLetterCapitalize(ability)}</li>
                                    })
                                }
                            </ul>


                        </div>}</div>


                </div>

                <div onClick={() => {
                    setCurrentImage(pokemonImages[alternateImages()])
                }} className="image">
                    <img src={currentImage} alt={name}/>
                </div>

            </div>
            }


        </div>
    );
}

export default ListCard;