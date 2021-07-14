import { TEST } from './actions';


const INITIAL_STATE = {
    currentChat: {name: "Гд Гошан Гошанович", avatar: "https://cdn.discordapp.com/attachments/822098460643033140/862986762615783474/2021-06-28_173127.png", carName:"Tayota Camri, 1917", date:"09.07.2021"},
    myChats: [
        {
            name: "Гд Гошан Гошанович", avatar: "https://cdn.discordapp.com/attachments/822098460643033140/862986762615783474/2021-06-28_173127.png", carName:"Tayota Camri, 1917", date:"09.07.2021"
        }
    ],
};

export const messages = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case TEST:

        return state;
        default:
            return state;
    }
};