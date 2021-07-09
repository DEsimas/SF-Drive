import React from "react";

import Header from "./../Common/Header.js";
import HeaderREGISTERED from "./../Common/HeaderREGISTERED.js";
import { useSelector } from 'react-redux';

/*props{
    name
    avatar
    carName
    date
}*/
import ChatMember from "./ChatMember.js";


function Messages(props) {
	return (
		<>
			{useSelector(state => state.authorization.user) ? <HeaderREGISTERED/> : <Header/>}
			<main className="messagesMain">
                <h1 className="messagesHeader">Сообщения</h1>
                <div className="chats">

                    {/* test */}
                    <ChatMember name="Гд Гошан Гошанович" avatar="https://cdn.discordapp.com/attachments/822098460643033140/862986762615783474/2021-06-28_173127.png" carName="Tayota Camri, 1917" date="09.07.2021"/>

                </div>
            </main>
		</>
	);
}

export default Messages;