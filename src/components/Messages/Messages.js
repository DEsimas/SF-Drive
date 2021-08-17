import React, { useEffect, useState } from "react";

import openSocket from "socket.io-client";
import Header from "./../Common/Header.js";
import HeaderREGISTERED from "./../Common/HeaderREGISTERED.js";
import { useSelector } from 'react-redux';
import { SERVER_ADDRESS } from '../../components/requests';

import ChatMember from "./ChatMember.js";

import "./../../styles/Messages/Messages.scss";
import Chat from "../_pages/Chat.jsx";

let fetched = false;
const MESSAGES_URL = "http://localhost:2000";

function Messages(props) {

	const user = useSelector(state => (state.authorization.user));
	const inChat = useSelector(state => (state.messages.inChat));
	const currentChat = useSelector(state => (state.messages.currentChat));

	useEffect(() => {

		//get socket
		const socket = openSocket(MESSAGES_URL);

		//subscribe on auth event
		socket.on('auth', (status) => {
			if(status.success) {
				return;
			}
			// alert(status.msg);
		});
		//send auth when entering chat
		socket.emit('auth', user);

		//subscribe on new messages
		socket.on('message', (message) => {
			props.add_new_message( { message: message, myID: user._id } );
		});

		if(fetched) return;

		if (user != undefined) {
			let ids = [user._id];
			ids = ids.concat(user.chats);


			fetch(SERVER_ADDRESS + "messages/myChats",
				{
					method: "POST",
					body: JSON.stringify({ ids: ids }),
					headers: {
						'Content-Type': 'application/json;charset=utf-8'
					}
				})
				.then(res => (res.json()))
				.then(res => { 
					fetched = true;
					props.save_my_chats(res)
				})
				.catch(error => {
					fetched = true;
					alert("my chats request fail", error)
				});
		}
	});
	const msgs = (
	<>
		{useSelector(state => state.authorization.user) ? <HeaderREGISTERED /> : <Header />}
		<main className="messagesMain">
			<h1 className="messagesHeader">Сообщения</h1>
			<div className="chats">
				{useSelector(state => state.messages.myChats).map((el) => <ChatMember key={el._id} set_current_chat = { props.set_current_chat } name={el.name} avatar={el.avatar} carName={el.carName} date={el.date} id={el._id} />)}
			</div>
		</main>
	</>);

	return inChat ? <Chat chat={ currentChat } ></Chat> : msgs;
}

export default Messages;