import React from "react";

import Header from "./../Common/Header.js";
import HeaderREGISTERED from "./../Common/HeaderREGISTERED.js";
import Questions from './Questions.js';
import Footer from"./../Common/Footer.js";
import { useSelector } from 'react-redux';

import "./../../styles/FAQ/FAQmain.scss";

function FAQ(props) {
	return (
		<>
			{useSelector(state => state.authorization.user) ? <HeaderREGISTERED/> : <Header/>}
			<main className="FAQmain">
                <div className="imgWrap"><img className="FAQimage" src="assets/FAQpic.svg" alt=""></img></div>
                <Questions/>
            </main>
			<Footer/>
		</>
	);
}

export default FAQ;