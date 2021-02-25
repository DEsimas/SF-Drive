import React from "react";

import Field from './Field.js';

function CommonInfo(props) {
	return (
		<>
			<h2>Информация о вас</h2>
            <Field name="ФИО" inputType="text" placeholder="ФИО полностью" identificator="name"/>
            <Field name="Дата рождения" inputType="date" identificator="birth"/>
            <Field name="Электронная почта" inputType="text" placeholder="mail@example.com" identificator="email"/>
            <Field name="Телефон" inputType="text" placeholder="+7 900 000-00-00" identificator="phone"/>
		</>
	);
}

export default CommonInfo;