import { combineReducers } from "redux";
import menu from "./menu";
import { routerReducer } from "react-router-redux";

export default combineReducers({
    menu,
    routing: routerReducer
});
