import { writeTokens, ACCESS_TOKEN_STORAGE_KEY } from "./JWT";

const SERVER_ADDRESS = "http://localhost:8000/";

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
                console.log(data);
                if(data.accessToken) writeTokens(data.accessToken, data.refreshToken);
                alert('success');
            })
            .catch(e => document.getElementById('alert').classList.remove('hide'));
};

export const authorizationRequest = data => {
    fetch(SERVER_ADDRESS + 'authorization/',
    {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            writeTokens(data.accessToken, data.refreshToken);
            alert('success');
        })
        .catch(e => console.log(e));
};

export const recoveryRequest = data => {

    fetch(SERVER_ADDRESS + 'recovery/',
    {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': `Bearer ${localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY)}`
        }
    })
        .then(res => res.json())
        .then(data => {
            if(data.message == "ok") alert('success');
            else alert(data.message);
        })
        .catch(e => console.log(e));
};