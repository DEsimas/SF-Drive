import { recoveryRequest } from "../../components/requests";

export const RECOVERY_SEND_REQUEST = "RECOVERY_SEND_REQUEST";

export const recoverySendRequest = data => ({ type: RECOVERY_SEND_REQUEST, payload: data});

export const RECOVERY_REQUEST = "RECOVERY_REQUEST";
export const RECOVERY_SUCCESS = "RECOVERY_SUCCESS";
export const RECOVERY_FAILURE = "RECOVERY_FAILURE";
export const RECOVERY_SEND = "RECOVERY_SEND";

export const recovery_request = (data) => ({type:RECOVERY_REQUEST, payload: data});
export const recovery_success = (user) => ({type:RECOVERY_SUCCESS, payload: user});
export const recovery_failure = (error) => ({type:RECOVERY_FAILURE, payload: error});

export const recovery_send = (data) => {
    return dispatch => {
        dispatch(recovery_request(data));
        return recoveryRequest(data)
            .then(res => res.json())
            .then(data => {
                if (data.statusCode == 400 || data.statusCode == 404 || data.statusCode == 500) dispatch(recovery_failure(`Ошибка ${data.statusCode}`));
                else {
                    dispatch(recovery_success(data));
                }
            })
            .catch(e => {
                console.log(e)
                dispatch(recovery_failure(`Ошибка ${data.statusCode}`));
            });
    };
};
