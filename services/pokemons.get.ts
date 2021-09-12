
import axios from "axios";


export const getPokemons =()=>{

    const url = 'https://pokeapi.co/api/v2/type/3'


    return axios.get(url)
}