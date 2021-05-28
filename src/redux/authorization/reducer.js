import { LOAD_USER, AUTH_FAILURE, AUTH_SUCCESS } from './actions';

const INITIAL_STATE = {};

export const authorization = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case AUTH_SUCCESS:
            state = {
                ...state,
                user: action.payload,
            }
            localStorage.setItem("user", JSON.stringify(action.payload));
        return state;
        case AUTH_FAILURE:
            console.log(action.payload);
        return state;
        case LOAD_USER:
            state = {
                ...state,
                user: JSON.parse(localStorage.getItem("user"))
            }
        return state;
        default:
            return state;
    }
};