import {  REC_FAILURE, REC_SUCCESS } from "./actions";

const INITIAL_STATE = { cars: [] }

export const ChooseAvto = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REC_SUCCESS:
            // console.log(action.payload)
            state = {
                ...state,
                cars: action.payload,
            }
        return state;
        case REC_FAILURE:
            console.log(action.payload);
        return state;
        default:
            return state;
    }
}