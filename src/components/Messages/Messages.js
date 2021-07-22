import React, { useEffect } from "react";

import Header from "./../Common/Header.js";
import HeaderREGISTERED from "./../Common/HeaderREGISTERED.js";
import { useSelector } from 'react-redux';
import { SERVER_ADDRESS } from '../../components/requests';

import ChatMember from "./ChatMember.js";

import "./../../styles/Messages/Messages.scss";

let fetched = false;

function Messages(props) {

	const user = useSelector(state => (state.authorization.user));

	useEffect(() => {

		console.log(fetched);

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
					console.log("my chats request fail", error)
				});
		}
	});

	// if(!user) return (<h1>¯\_(ツ)_/¯</h1>);

	// useEffect(() => {
	// console.log(user);

	//first id is current user id

	// console.log(ids);
	// });

	return (
		<>
			{useSelector(state => state.authorization.user) ? <HeaderREGISTERED /> : <Header />}
			<main className="messagesMain">
				<h1 className="messagesHeader">Сообщения</h1>
				<div className="chats">
					{useSelector(state => state.messages.myChats).map((el) => <ChatMember name={el.name} avatar={el.avatar} carName={el.carName} date={el.date} id={el._id} />)}
				</div>
			</main>
		</>
	);
}

export default Messages;