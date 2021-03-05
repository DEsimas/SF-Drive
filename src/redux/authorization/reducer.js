import { authorizationRequest } from '../../components/requests';
import { AUTHORIZATION_SEND_DATA } from './actions';

const INITIAL_STATE = {};

export const authorization = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case AUTHORIZATION_SEND_DATA:
            authorizationRequest(action.payload);
        return state;

        default:
            return state;
    }
};