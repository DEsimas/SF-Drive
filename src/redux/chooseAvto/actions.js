import { getRecommendations } from "../../components/requests";

export const GET_RECOMMENDATIONS = "GET_RECOMMENDATIONS";
export const REC_REQUEST = "REC_REQUEST";
export const REC_SUCCESS = "REC_SUCCESS";
export const REC_FAILURE = "REC_FAILURE";

export const rec_request = () => ({type: REC_REQUEST});
export const rec_success = (data) => ({type: REC_SUCCESS, payload: data});
export const rec_failure = (e) => ({type: REC_FAILURE, payload: e});

export const get_recommendations = () => {
    return dispatch => {
        dispatch(rec_request());
        return getRecommendations()
            .then(res => res.json())
            .then(data => {
                if (data.statusCode == 400 || data.statusCode == 404 || data.statusCode == 500) dispatch(rec_failure(`Ошибка ${data.statusCode}`));
                else {
                    dispatch(rec_success(data));
                }
            })
            .catch(e => {
                console.log(e)
                dispatch(rec_failure(`Ошибка ${data.statusCode}`));
            });
    };
};