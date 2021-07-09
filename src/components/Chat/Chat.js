import React, { useState } from "react";

import Header from "./../Common/Header.js";
import HeaderREGISTERED from "./../Common/HeaderREGISTERED.js";
import { useSelector } from 'react-redux';

function Chat(props) {
    const member = useSelector(state => state.messages.currentChat);
    const username = member.name.split(' ')[1] + ' ' + member.name.split(' ')[0][0] + '.';


	return (
		<>
			{useSelector(state => state.authorization.user) ? <HeaderREGISTERED/> : <Header/>}
			<main className="chatMain">

            </main>
		</>
	);
}

export default Chat;