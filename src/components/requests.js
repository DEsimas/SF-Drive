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
            .then(data => console.log(data))
            .catch(e => document.getElementById('alert').classList.remove('hide'));
};