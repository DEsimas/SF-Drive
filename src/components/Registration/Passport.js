import React from "react";

import Field from './Field.js';

function Passport(props) {
	return (
		<>
			<h2 className="InfoHeader">Паспорт</h2>
			<div className="inputs">
            <Field className="field" name="Серия и номер" inputType="text" placeholder="0000 000000" identificator="passport"/>
            <Field className="field" name="Дата выдачи" inputType="date" identificator="passportdate"/>
            <Field className="field" name="Кем выдан" inputType="text" placeholder="Название органа выдавшего паспорт" identificator="passportwho"/>
            <Field className="field" name="Код подразделения" inputType="text" placeholder="000-000" identificator="passportcode"/>
			</div>
		</> 
	);
}

export default Passport;