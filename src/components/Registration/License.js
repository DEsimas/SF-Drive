import React from "react";

import Field from './Field.js';

function License(props) {
	return (
		<>
			<h2>Водительское удостоверение</h2>
            <Field name="Серия и номер" inputType="text" placeholder="0000 000000" identificator="license"/>
            <Field name="Дата выдачи" inputType="date" identificator="licensedate"/>
		</>
	);
}

export default License;