import { registrationRequest } from "../../components/requests";

export const REGISTRATION_REQUEST = "REGISTRATION_REQUEST";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAILURE = "REGISTRATION_FAILURE";
export const REGISTRATION_SEND = "REGISTRATION_SETD";

export const registration_request = (data) => ({type:REGISTRATION_REQUEST, payload: data});
export const registration_success = (user) => ({type:REGISTRATION_SUCCESS, payload: user});
export const registration_failure = (error) => ({type:REGISTRATION_FAILURE, payload: error});

export const registration_send = (data) => {
    return dispatch => {
        dispatch(registration_request(data));
        return registrationRequest(data)
            .then(res => res.json())
            .then(data => {
                if (data.statusCode == 400 || data.statusCode == 404 || data.statusCode == 500) dispatch(registration_failure(`Ошибка ${data.statusCode}`));
                else {
                    dispatch(registration_success(data));
                }
            })
            .catch(e => {
                console.log(e)
                dispatch(registration_failure(`Ошибка ${data.statusCode}`));
            });
    };
};
