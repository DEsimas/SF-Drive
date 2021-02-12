import React from "react";

function Question(props) {
	return (
		<div>
			<button>
				<span>{props.question}</span>
				<img src="assets/arrowDown.svg" alt=""></img>
                <img src="assets/arrowUp.svg" alt=""></img>
			</button>
			<p>{props.answ}</p>
		</div>
	);
}

export default Question;