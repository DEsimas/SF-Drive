import { recoveryRequest } from './../../components/requests';
import { RECOVERY_SEND_REQUEST } from './actions';


const INITIAL_STATE = {};

export const recovery = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case RECOVERY_SEND_REQUEST:
            recoveryRequest(action.payload);
            return state;
        default:
            return state;
    }
};