export const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE";
export const ADD_NEW_CHAT = "ADD_NEW_CHAT";

export const add_new_message = (data) => ({type: ADD_NEW_MESSAGE, payload: data});
export const add_new_chat = (data) => ({type: ADD_NEW_CHAT, payload: data});
