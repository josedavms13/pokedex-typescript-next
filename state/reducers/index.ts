import {combineReducers} from "redux";
import themeReducer from "./themeReducer";
import userReducer from "./userReducer";

export default combineReducers({
    theme: themeReducer,
    user : userReducer
})