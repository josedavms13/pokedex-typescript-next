import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import PokemonList from "../components/PokemonList";
import Header from "../components/Header";
import Login from "./Login";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div >
        <Header />

        <PokemonList />


    </div>
  )
}

export default Home
