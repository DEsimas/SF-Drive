import { SAVE_DATA } from "./actions";

const INITIAL_STATE = {};

export const addCar = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case SAVE_DATA:
            state = {
                ...state,
                user: action.payload,
            }
        return state;
        default:
            return state;
    }
};