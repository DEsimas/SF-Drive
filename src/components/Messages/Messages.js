import React from "react";

import Header from "./../Common/Header.js";
import HeaderREGISTERED from "./../Common/HeaderREGISTERED.js";
import { useSelector } from 'react-redux';

import ChatMember from "./ChatMember.js";

import "./../../styles/Messages/Messages.scss";

function Messages(props) {
	return (
		<>
			{useSelector(state => state.authorization.user) ? <HeaderREGISTERED/> : <Header/>}
			<main className="messagesMain">
                <h1 className="messagesHeader">Сообщения</h1>
                <div className="chats">
                    { useSelector(state => state.messages.myChats).map((el) => <ChatMember name={ el.name } avatar={ el.avatar } carName={ el.carName } date={ el.date } />) }
                </div>
            </main>
		</>
	);
}

export default Messages;