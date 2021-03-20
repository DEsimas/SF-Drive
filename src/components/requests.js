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
            console.log(data);
            localStorage.setItem(USER_ID_KEY, data.id);
            alert('success');
        })
        .catch(e => {
            document.getElementById('alert').classList.remove('hide_');
    });
};

export const authorizationRequest = data => {

    console.log(data);

    fetch(SERVER_ADDRESS + data.email + '/',
        {
            method: "POST",
            body: JSON.stringify({password: data.password}),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.message == 'user not found'){
            
             alert('user not found');
            } else {
               console.log(data);
            localStorage.setItem(USER_ID_KEY, data.id);
            // writeTokens(data.accessToken, data.refreshToken);
            alert('success');
            }
        })
        .catch(e => console.log(e));
};

export const recoveryRequest = data => {
    let userID = localStorage.getItem(USER_ID_KEY);

    console.log(userID);

    let isCorrect = true;

    fetch(SERVER_ADDRESS + userID + '/')
        .then(res => res.json())
        .then(res => {
            if (res.email != data.email) {
                alert("Неверная почта");
                isCorrect = false;
            };

            if (!isCorrect) return 1;

            fetch(SERVER_ADDRESS + userID + '/',
                {
                    method: "PUT",
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                    }
                })
                .then(res => res.json())
                .then(data => {
                    if (data.message != "user not found") alert('success');
                    else alert(data.message);
                })
                .catch(e => console.log(e));
        });


};