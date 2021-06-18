import { addCarRequest } from "../../components/requests";

export const SAVE_DATA = "SAVE_DATA";
export const CAR_REQUEST = "CAR_REQUEST";
export const CAR_SUCCESS = "CAR_SUCCESS";
export const CAR_FAILURE = "CAR_FAILURE";

export const saveData = (data) => ({type:SAVE_DATA, payload: data});

export const car_request = (data) => ({type:CAR_REQUEST, payload: data});
export const car_success = (data) => ({type:CAR_SUCCESS, payload: data});
export const car_failure = (error) => ({type:CAR_FAILURE, payload: error});

export const car_send = (data) => {
    return dispatch => {
        dispatch(car_request(data));
        return addCarRequest(data)
            .then(res => res.json())
            .then(data => {
                if (data.statusCode == 400 || data.statusCode == 404 || data.statusCode == 500) dispatch(auth_failure(`Ошибка ${data.statusCode}`));
                else {
                    dispatch(car_success(data));
                }
            })
            .catch(e => {
                console.log(e)
                dispatch(car_failure(`Ошибка ${data.statusCode}`));
            });
    };
};