export const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE";
export const ADD_NEW_CHAT = "ADD_NEW_CHAT";
export const SAVE_MY_CHATS = "SAVE_MY_CHATS";

export const add_new_message = (data) => ({ type: ADD_NEW_MESSAGE, payload: data });
export const add_new_chat = (data) => ({ type: ADD_NEW_CHAT, payload: data });
export const save_my_chats = (data) => ({type: SAVE_MY_CHATS, payload: data});