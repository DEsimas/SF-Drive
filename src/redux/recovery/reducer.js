import { RECOVERY_SEND_REQUEST, RECOVERY_SUCCESS, RECOVERY_FAILURE } from './actions';


const INITIAL_STATE = {};

export const recovery = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case RECOVERY_SUCCESS:
            state = {
                ...state,
                user: action.payload,
            }
        return state;
        case RECOVERY_FAILURE:
            console.log(action.payload);
        return state;
        default:
            return state;
    }
};