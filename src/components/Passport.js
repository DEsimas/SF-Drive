import React from "react";

import Field from './Field.js';

function Passport(props) {
	return (
		<>
			<h2>Паспорт</h2>
            <Field name="Серия и номер" inputType="text" placeholder="0000 000000" identificator="passport"/>
            <Field name="Дата выдачи" inputType="date" identificator="passportdate"/>
            <Field name="Кем выдан" inputType="text" placeholder="Название органа выдавшего паспорт" identificator="passportwho"/>
            <Field name="Код подразделения" inputType="text" placeholder="000-000" identificator="passportcode"/>
		</>
	);
}

export default Passport;