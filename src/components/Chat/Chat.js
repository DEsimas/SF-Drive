import React, { useEffect, useState } from "react";

import Header from "./../Common/Header.js";
import HeaderREGISTERED from "./../Common/HeaderREGISTERED.js";
import { useSelector } from 'react-redux';
import Message from "./message.js";
import { SERVER_ADDRESS } from "../requests.js";

//styles
import "./../../styles/Chat/chat.scss";


function Chat(props) {
	const chat = props.chat;
    const username = chat.name.split(' ')[1] + ' ' + chat.name.split(' ')[0][0] + '.';
	
	const user = useSelector(state => (state.authorization.user));

	//get messages from state
	const messages = chat.messages;

	return (
		<>
			{useSelector(state => state.authorization.user) ? <HeaderREGISTERED/> : <Header/>}
			<main className="chatMain">
				<a href="http://localhost:4200/messages" className="backButton">Назад</a>
				<span className="chatName">{ username }</span>
				<div className="msgs">
					{messages.map((el, index) => (<Message key={index} message={ el }/>))}
				</div>
            </main>
		</>
	);
}

export default Chat; 