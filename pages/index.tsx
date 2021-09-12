import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import PokemonList from "../components/PokemonList";
import Header from "../components/Header";
import Login from "./Login";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
        <Header />
        <Login />


    </div>
  )
}

export default Home
