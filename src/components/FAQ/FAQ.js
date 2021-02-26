import React from "react";

import Header from "./../Header.js";
import Questions from './Questions.js';
import Footer from"./../Footer.js";
import "./../../styles/FAQ/FAQmain.scss";

function FAQ(props) {
	return (
		<>
			<Header/>
			<main className="FAQmain">
                <div className="imgWrap"><img className="FAQimage" src="assets/FAQpic.svg" alt=""></img></div>
                <Questions/>
            </main>
			<Footer/>
		</>
	);
}

export default FAQ;