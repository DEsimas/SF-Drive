import { CAR_FAILURE, CAR_SUCCESS, SAVE_DATA } from "./actions";

const INITIAL_STATE = {};

export const addCar = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case CAR_SUCCESS:
            state.cars ? state.cars.push(action.payload) : state.cars = [ action.payload ];
        return state;
        case CAR_FAILURE:
            console.log(action.payload);
        return state;
        case SAVE_DATA:
            state = {
                ...state,
                temp: action.payload,
            }
        return state;
        default:
            return state;
    }
};