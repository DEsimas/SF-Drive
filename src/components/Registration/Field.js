import React, { useEffect, useState } from "react";

import "./../../styles/Registration/Field.scss";

function Field(props) {

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