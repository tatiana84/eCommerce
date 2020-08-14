import {
    SET_USER_PURCHASES
} from "../actions/types";
import actions from "redux-form/lib/actions";

const INITIAL_STATE = {
    purchases: []
}

export default functions(state = INITIAL_STATE, actions) {
    switch (action.type) {
        case SET_USER_PURCHASES:
            return {
                ...state,
                purchases: action.payload
            }
        default: return state;
    }
}