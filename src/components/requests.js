const SERVER_ADDRESS = "http://localhost:3000/";
let USER_ID_KEY = "USER_ID";

export const registrationRequest = data => {
    return fetch(SERVER_ADDRESS + "registration/",
        {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
};

export const authorizationRequest = data => {
    return( fetch(SERVER_ADDRESS  + "registration/" + "auth/",
        {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        }))
};

export const recoveryRequest = data => {
    return fetch(SERVER_ADDRESS  + "registration/" + data.email,
        {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
};

export const getRecommendations = () => {
    return( fetch(SERVER_ADDRESS + "cars/recommendations",
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        }))
}

export const addCarRequest = data => {
    return( fetch(SERVER_ADDRESS + 'cars/',
    {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    }))
}