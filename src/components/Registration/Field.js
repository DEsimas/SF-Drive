import React from "react";

import "./../../styles/Registration/Field.scss";

function Field(props) {

	function normalize(){
		document.getElementById(props.identificator).classList.remove("error");
		document.getElementById(props.idWarning).innerHTML = '';
	}

	return (
		<>
			<div className="field">
				<span className="p">{props.name}</span>
            	<input onChange={normalize}className="input" id={props.identificator} type={props.inputType} placeholder={props.placeholder}/>
				<div/>
				<span className="warning" id={ "W" + props.identificator}></span>
			</div>
		</>
	);
}

export default Field;