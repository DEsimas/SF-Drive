import { authorizationRequest } from "../../components/requests";

export const AUTHORIZATION_SEND_DATA = 'AUTHORIZATION_SEND_DATA';
export const AUTH_REQUEST = "AUHT_REQUEST";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAILURE = "AUTH_FAILURE";
export const AUTH_SEND = "AUTH_SEND";

export const LOAD_USER = "LOAD_USER";

export const load_user = () => ({type: LOAD_USER});

export const authorizationSendData = data => ({type:AUTHORIZATION_SEND_DATA, payload: data});
export const auth_request = (data) => ({type:AUTH_REQUEST, payload: data});
export const auth_success = (user) => ({type:AUTH_SUCCESS, payload: user});
export const auth_failure = (error) => ({type:AUTH_FAILURE, payload: error});

export const auth_send = (data) => {
    return dispatch => {
        dispatch(auth_request(data));
        return authorizationRequest(data)
            .then(res => res.json())
            .then(data => {
                if (data.statusCode == 400 || data.statusCode == 404 || data.statusCode == 500) dispatch(auth_failure(`Ошибка ${data.statusCode}`));
                else {
                    dispatch(auth_success(data));
                }
            })
            .catch(e => {
                console.log(e)
                dispatch(auth_failure(`Ошибка ${data.statusCode}`));
            });
    };
};
