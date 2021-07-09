import React from "react";

import Header from "./../Common/Header.js";
import HeaderREGISTERED from "./../Common/HeaderREGISTERED.js";
import Footer from"./../Common/Footer.js";
import { useSelector } from 'react-redux';

function Messages(props) {
	return (
		<>
			{useSelector(state => state.authorization.user) ? <HeaderREGISTERED/> : <Header/>}
			<main className="FAQmain">
                
            </main>
			<Footer/>
		</>
	);
}

export default Messages;