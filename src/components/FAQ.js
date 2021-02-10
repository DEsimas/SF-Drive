import React from "react";

import Header from "./Header.js";
import Question from './Questions.js';
import Footer from"./Footer.js";

function FAQ(props) {
	return (
		<>
			<Header/>
			<main>
                <img src="assets/FAQpic.svg" alt=""></img>
                <Question/>
            </main>
			<Footer/>
		</>
	);
}

export default FAQ;