import { SERVER_ADDRESS } from '../../components/requests';
import { ADD_NEW_CHAT, ADD_NEW_MESSAGE, SAVE_MY_CHATS, SET_CURRENT_CHAT } from './actions';


const INITIAL_STATE = {
    currentChat: {},
    myChats: [],
};

export const messages = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            state.myChats.forEach((el, index) => {
                if (el._id == action.payload.senderID || el._id == action.payload.receiverID) state.myChats[index].messages.push(action.payload);
            });

            state.myChats.forEach((el, index) => {
                if (el._id == state.currentChat._id) state.currentChat = el;
            });
            return state;
        case ADD_NEW_CHAT:

            let data = action.payload.chats;
            data[data.length] = action.payload.chat;

            let user = fetch(SERVER_ADDRESS + "registration/" + action.payload.id,
                {
                    method: "PUT",
                    body: JSON.stringify({ chats: data }),
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    }
                })
                .then(res => (res.json()))
                .then(data => {
                    console.log(data)
                    localStorage.setItem("user", JSON.stringify(data));
                    location.assign("http://localhost:4200/messages");
                })
            return state;
        case SAVE_MY_CHATS:
            state = {
                ...state,
                myChats: action.payload
            };
            return state;
        case SET_CURRENT_CHAT:
            //we need to write chat with id from payload to state.currentChat

            const id = action.payload;

            const chat = state.myChats.find((el) => {
                if(el._id == id) return true;
                else return false;
            });

            //changing state with COOL es6 syntaxis
            state = {
                ...state,
                currentChat: chat
            };

            //redirecting to chat page
            location.assign("http://localhost:4200/chat");
            return state;
        default:
            return state;
    }
};