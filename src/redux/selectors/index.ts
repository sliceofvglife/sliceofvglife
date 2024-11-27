import { MenuState } from "../actions";

export const getMenuState = (store: any) => store.menu;

export const getMenu = (store: any): MenuState =>
    getMenuState(store) ? getMenuState(store) : {};
