import { registrationRequest } from './../../components/requests';
import { REGISTRATION_SEND_DATA } from './actions';


const INITIAL_STATE = {};

export const registration = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case REGISTRATION_SEND_DATA:
            registrationRequest(action.payload);
            return state;
        default:
            return state;
    }
};