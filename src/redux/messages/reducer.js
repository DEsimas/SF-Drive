import { SERVER_ADDRESS } from '../../components/requests';
import { ADD_NEW_CHAT, ADD_NEW_MESSAGE, SAVE_MY_CHATS } from './actions';


const INITIAL_STATE = {
    currentChat: {
        name: "Гд Гошан Гошанович",
        avatar: "https://cdn.discordapp.com/attachments/822098460643033140/862986762615783474/2021-06-28_173127.png",
        carName: "Tayota Camri, 1917",
        date: "09.07.2021",
        _id: "60e80fd3dd33bf1488683042",
        messages: [
            {
                senderID: "60e80fd3dd33bf1488683042",
                receiverID: "60db37524768471e3c43f7da",
                content: "hello world",
                date: "16-07-2021",
                _id: "testMSG",
            },
            {
                senderID: "60db37524768471e3c43f7da",
                receiverID: "60e80fd3dd33bf1488683042",
                content: "i love amogus",
                date: "16-07-2021",
                _id: "testMSG2",
            },
        ]
    },
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
                    location.assign("http://localhost:4200/messages")
                })
            return state;
        case SAVE_MY_CHATS:
            state = {
                ...state,
                myChats: action.payload
            };
            return state;
        default:
            return state;
    }
};