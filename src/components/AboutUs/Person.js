import React from "react";

import "./../../styles/AboutUs/person.scss"

function Person(props) {
	return (
		<div className="person">
			<img className="pfp" src={"assets/" + props.img + ".png"} alt={props.name}></img>
			<span className="name">{props.name}</span>
			<span className="profession">{props.profession}</span>
		</div>
	);
}

export default Person;