import { registrationRequest } from './../../components/requests';
import { REGISTRATION_SUCCESS,  REGISTRATION_FAILURE} from './actions';


const INITIAL_STATE = {};

export const registration = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case REGISTRATION_SUCCESS:
            state = {
                ...state,
                user: action.payload,
            }
        return state;
        case REGISTRATION_FAILURE:
            console.log(action.payload);
        return state;
        default:
            return state;
    }
};