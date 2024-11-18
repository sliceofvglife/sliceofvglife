import { Dispatch } from "redux";
import { Actions } from "../actions/types";
import { toggleMenu } from "../actions";

export const dispatchToggleMenu =
    (dispatch: Dispatch<Actions>) => (value: boolean) =>
        dispatch(toggleMenu(value));
