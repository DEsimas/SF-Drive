import { SERVER_ADDRESS } from '../../components/requests';
import { ADD_NEW_CHAT, ADD_NEW_MESSAGE, SAVE_MY_CHATS, SET_CURRENT_CHAT } from './actions';


const INITIAL_STATE = {
    currentChat: {},
    myChats: [],
    inChat: false
};

export const messages = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:

            console.log(action.payload);

            const otherID = action.payload.message.senderID === action.payload.myID ? action.payload.message.receiverID : action.payload.message.senderID;

            let chatID;
            state.myChats.forEach( (el, index) => {
                if(el._id = otherID) chatID = index;
            } );

            state.myChats[chatID].messages.push(action.payload.message);

            if(state.currentChat._id === otherID) state.currentChat.messages.push(action.payload.message);

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
                    localStorage.setItem("user", JSON.stringify(data));
                    location.assign("/messages");
                })

            return state;
        case SAVE_MY_CHATS:
            state = {
                ...state,
                myChats: action.payload
            };

            state.myChats.forEach( (el, index, array) => {
                array[index].messages.reverse();
            } );
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
                currentChat: chat,
                inChat: true
            };
            return state;
        default:
            return state;
    }
};