
import axios from "axios";


export const getPokemons =()=>{

    const url = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=1'


    return axios.get(url)
}