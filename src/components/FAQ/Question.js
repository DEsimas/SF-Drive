import React from "react";

import "./../../styles/FAQ/question.scss";

function Question(props) {

	function change(elem, index){
		for(let i = 0; i < 6; i++) {
			if(i != index) elem[i].classList.remove("open");
		}

		if(elem[index].classList[1] == "open") elem[index].classList.remove("open");
		else elem[index].classList.add("open");
	}

	return (
		<div className="qstSection">
			<button className="qst" onClick={() => change(document.getElementsByClassName("qstSection"), props.num)}>
				<span>{props.question}</span>
				<img className="arrow down" src="assets/arrowDown.svg" alt=""></img>
                <img className="arrow up" src="assets/arrowUp.svg" alt=""></img>
			</button>
			<p className="answ">{props.answ}</p>
		</div>
	);
}

export default Question;