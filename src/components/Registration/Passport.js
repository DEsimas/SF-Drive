import React from "react";

import Field from './Field.js';

function Passport(props) {
	return (
		<>
			<h2 className="InfoHeader">Паспорт</h2>
			<div className="inputs">
            	<Field value={props.value[0]} change={props.change[0]} className="field" name="Серия и номер" inputType="text" placeholder="0000 000000" identificator="passport"/>
            	<Field value={props.value[1]} change={props.change[1]} className="field" name="Дата выдачи" inputType="date" identificator="passportdate"/>
            	<Field value={props.value[2]} change={props.change[2]} className="field" name="Кем выдан" inputType="text" placeholder="Название органа выдавшего паспорт" identificator="passportwho"/>
            	<Field value={props.value[3]} change={props.change[3]} className="field" name="Код подразделения" inputType="text" placeholder="000-000" identificator="passportcode"/>
			</div>
		</> 
	);
}

export default Passport;