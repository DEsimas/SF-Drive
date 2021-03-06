import JWTdecode from 'jwt-decode';

export const ACCESS_TOKEN_STORAGE_KEY = 'accessToken';
const REFRESH_TOKEN_STORAGE_KEY = 'refreshToken';
const MILLISECONDS_IN_SECOND = 1000;
const ACCESS_TOKEN_UPDATAE_DIFF = 60;
const REFRESH_SERVER_ADDRESS = "http://localhost:8000/authorization/refresh";
const AUTH_SERVER_ADDRESS = "http://localhost:8000/authorization/send";

// const decodeToken = token => {
//     let tokenData;

//     try{
//         tokenData = JWTdecode(token);
//     } catch (e) {
//         console.warn(e);
//     }

//     return tokenData;
// }

// const isTokenValid = expiersAt => {
//     const currentTime = Math.round(Date.now() / MILLISECONDS_IN_SECOND);
//     const diff = expiersAt - currentTime;

//     return diff > ACCESS_TOKEN_UPDATAE_DIFF;
// }

// const updateTokens = async () => {
//     const refreshToken = localStorage.getItem(REFRESH_TOKEN_STORAGE_KEY);

//     const response = await fetch(REFRESH_SERVER_ADDRESS, {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json;charset=utf-8'
//         },
//         body: JSON.stringify({ refreshToken })
//     });

//     const data = await response.json();

//     if(response.ok) {
//         writeTokens(data.accessToken, data.refreshToken);

//         return data.accessToken;
//     } else if (data.error) {
//         throw new Error(data.error);
//     }
// }

export const writeTokens = function(access, refresh){
    localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, access);
    localStorage.setItem(REFRESH_TOKEN_STORAGE_KEY, refresh);
};

// export const getAccessToken = async () => {
//     const accessToken = localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);
    // const tokenData = decodeToken(accessToken);
    // const isAccessTokenValid = isTokenValid(tokenData.exp);

    // if(!isAccessTokenValid) {
    //     return await updateTokens();
    // }

//     return accessToken;
// }

// export async function callApi() {
//     const accessToken = await getAccessToken();

//     return fetch(AUTH_SERVER_ADDRESS, {
//         headers: {
//             'Content-Type': 'application/json;charset=utf-8',
//             'Authorization': `Bearer ${accessToken}`
//         }
//     })
// }