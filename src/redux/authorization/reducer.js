import { authorizationRequest } from '../../components/requests';
import { AUTHORIZATION_SEND_DATA, AUTH_FAILURE, AUTH_SUCCESS } from './actions';

const INITIAL_STATE = {};

export const authorization = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case AUTH_SUCCESS:
            state = {
                ...state,
                user: action.payload,
            }
            console.log(state);
        return state;
        case AUTH_FAILURE:
            console.log(action.payload);
        return state;
        default:
            return state;
    }
};