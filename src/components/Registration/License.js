import React from "react";

import Field from './Field.js';



function License(props) {
	return (
		<>
			<h2 className="InfoHeader">Водительское удостоверение</h2>
			<div className="inputs">
            <Field className="field" name="Серия и номер" inputType="text" placeholder="0000 000000" identificator="license" idWarning="Wlicense"/>
            <Field className="field" name="Дата выдачи" inputType="date" identificator="licensedate" idWarning="Wlicensedate"/>
			</div>
		</>
	);
}

export default License;