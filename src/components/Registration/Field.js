import React from "react";

import "./../../styles/Field.scss";

function Field(props) {
	return (
		<>
			<div className="field">
				<span className="p">{props.name}</span>
            	<input className="input" id={props.identificator} type={props.inputType} placeholder={props.placeholder}/>
			</div>
		</>
	);
}

export default Field;