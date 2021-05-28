import { writeTokens, ACCESS_TOKEN_STORAGE_KEY } from "./JWT";

const SERVER_ADDRESS = "http://localhost:3000/registration/";
let USER_ID_KEY = "USER_ID";

export const registrationRequest = data => {
    fetch(SERVER_ADDRESS,
        {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
        .then(res => res.json())
        .then(data => {
            if (data.statusCode == 400) alert(data.message);
            else if (data.statusCode == 500) alert("Server Error!");
            else {
                alert("success");
            };
        })
        .catch(e => {
            document.getElementById('alert').classList.remove('hide_');
            alert("Server Error!");
        });
};

export const authorizationRequest = data => {
    return( fetch(SERVER_ADDRESS + "auth/",
        {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        }))
};

export const recoveryRequest = data => {
    return fetch(SERVER_ADDRESS + data.email,
        {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
};