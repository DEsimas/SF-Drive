import { useQuery } from "@apollo/react-hooks";
import { GET_CARS_BY_NAME } from "./../../utils/graphql-requests.ts";
import {  CAR_NAME_FILTER_REQUEST, REC_FAILURE, REC_SUCCESS } from "./actions";

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
        case CAR_NAME_FILTER_REQUEST:            
            state.cars = action.payload;
        return state;
        default:
            return state;
    }
}