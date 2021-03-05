import React, { useEffect, useState } from "react";

import "./../../styles/Registration/Field.scss";

function Field(props) {

	let [CRUTCH, useEffectTrigger] = useState('I know what is useEffect & useState');

	function checkButton() {

		let isActive = true;

		let fields = document.getElementsByClassName('input')
		
		for (let index = 0; index < fields.length; index++) {
			if(fields[index].value == "") isActive = false;
		}

		if(isActive) document.getElementsByClassName('sendform')[0].classList.remove('isDisabled');
		else document.getElementsByClassName('sendform')[0].classList.add('isDisabled');
	}

	useEffect(() => {

		checkButton();

		document.getElementById(props.identificator).classList.remove("error");
		document.getElementById('W' + props.identificator).innerHTML = '';
	});

	return (
		<>
			<div className="field">
				<span className="p">{props.name}</span>
            	<input onChange={e => props.change(e.target.value)} value={props.value} className="input" id={props.identificator} type={props.inputType} placeholder={props.placeholder}/>
				<div/>
				<span className="warning" id={ "W" + props.identificator}></span>
			</div>
		</>
	);
}

export default Field;