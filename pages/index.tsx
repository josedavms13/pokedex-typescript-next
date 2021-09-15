import type {NextPage} from 'next'

import PokemonList from "../components/PokemonList";
import Header from "../components/Header";


const Home: NextPage = () => {
  return (
    <div >
        <Header />

        <PokemonList />


    </div>
  )
}

export default Home
