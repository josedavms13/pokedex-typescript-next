import {combineReducers} from "redux";
import themeReducer from "./themeReducer";
import userReducer from "./userReducer";
import languageReducer from './languageReducer'
import pokemonReducer from './pokemonReducer'
import speechReducer from "./speechReducer";

export default combineReducers({
    theme: themeReducer,
    user : userReducer,
    language : languageReducer,
    pokemons : pokemonReducer,
    speech : speechReducer
})