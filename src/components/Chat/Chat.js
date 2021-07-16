import React, { useEffect, useState } from "react";

import Header from "./../Common/Header.js";
import HeaderREGISTERED from "./../Common/HeaderREGISTERED.js";
import { useSelector } from 'react-redux';
import openSocket from "socket.io-client";

const MESSAGES_URL = "http://localhost:2000";

function Chat(props) {

	const member = useSelector(state => (state.messages.currentChat));
    const username = member.name.split(' ')[1] + ' ' + member.name.split(' ')[0][0] + '.';
	
	const user = useSelector(state => (state.authorization.user));

	//get messages from state
	const messages = useSelector(state => (state.messages.messages));
	
	useEffect(() => {
		//get socket
		const socket = openSocket(MESSAGES_URL);

		//subscribe on auth event
		socket.on('auth', (status) => {
			if(status.success) {
				console.log("ws success");
				return;
			}
			console.warn(status.msg);
		});
		//send auth when entering chat
		socket.emit('auth', user);

		//subscribe on new messages
		socket.on('message', (message) => {
			console.log(message);
			props.add_new_message(message);
		});
	});

	return (
		<>
			{useSelector(state => state.authorization.user) ? <HeaderREGISTERED/> : <Header/>}
			<main className="chatMain">

            </main>
		</>
	);
}

export default Chat;