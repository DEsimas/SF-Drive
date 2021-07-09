import { TEST } from './actions';


const INITIAL_STATE = {};

export const messages = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case TEST:

        return state;
        default:
            return state;
    }
};