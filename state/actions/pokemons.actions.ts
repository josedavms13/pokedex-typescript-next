

interface GetPokemonsSuccess{
    type: 'get-pokemons-success',
    payload?: any

}
interface GetPokemonsFail{
    type: 'get-pokemons-fail',
    payload?: any
}

export type pokemonActions = GetPokemonsSuccess | GetPokemonsFail