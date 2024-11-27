import { action } from "typesafe-actions";

export enum Constants {
    TOGGLE_MENU = "menu/toggleMenu"
}

export interface MenuState {
    toggled?: boolean;
}

export const toggleMenu = (value: boolean) =>
    action(Constants.TOGGLE_MENU, { value });
