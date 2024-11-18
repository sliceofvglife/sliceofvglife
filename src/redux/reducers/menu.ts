import { Constants } from "../actions";
import { Actions } from "../actions/types";

const initialState: {
    toggled: boolean;
} = { toggled: false };

export default (state = initialState, action: Actions) => {
    switch (action.type) {
        case Constants.TOGGLE_MENU:
            return {
                ...state,
                toggled: action.payload.value
            };
        default:
            return state;
    }
};
