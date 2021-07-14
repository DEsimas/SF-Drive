import React, { useEffect, useState } from "react";

import Header from "./../Common/Header.js";
import HeaderREGISTERED from "./../Common/HeaderREGISTERED.js";
import { useSelector } from 'react-redux';
import openSocket from "socket.io-client";

const MESSAGES_URL = "http://localhost:2000";

function Chat(props) {

	const member = useSelector(state => (state.messages.currentChat));
    const username = member.name.split(' ')[1] + ' ' + member.name.split(' ')[0][0] + '.';
	
	
	useEffect(() => {		
		const socket = openSocket(MESSAGES_URL);

		socket.on('new_message', (status) => {
			if(status.success) {
				console.log("ws success");
				return;
			}
			console.log("error with ws");
		});

		socket.emit('new_message', {cum: "yes"});
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