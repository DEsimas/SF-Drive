import { ADD_NEW_MESSAGE } from './actions';


const INITIAL_STATE = {
    currentChat: {
        name: "Гд Гошан Гошанович",
        avatar: "https://cdn.discordapp.com/attachments/822098460643033140/862986762615783474/2021-06-28_173127.png",
        carName:"Tayota Camri, 1917",
        date:"09.07.2021",
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
    myChats: [
        {
            name: "Гд Гошан Гошанович",
            avatar: "https://cdn.discordapp.com/attachments/822098460643033140/862986762615783474/2021-06-28_173127.png",
            carName:"Tayota Camri, 1917",
            date:"09.07.2021",
            messages: [],
            _id: "60e80fd3dd33bf1488683042"
        }
    ],
};

export const messages = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case ADD_NEW_MESSAGE:
            state.myChats.forEach((el, index) => {
                if(el._id == action.payload.senderID || el._id == action.payload.receiverID) state.myChats[index].messages.push(action.payload);
            });

            state.myChats.forEach((el, index) => {
                if(el._id == state.currentChat._id) state.currentChat = el;
            });
        return state;
        default:
            return state;
    }
};