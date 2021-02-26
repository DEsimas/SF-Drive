import React from "react";

import Field from './Field.js';

import "./../../styles/Registration/Info.scss";

function CommonInfo(props) {
	return (
		<>
			<h2 className="InfoHeader">Информация о вас</h2>
			<div className="inputs">
            <Field className="field" name="ФИО" inputType="text" placeholder="ФИО полностью" identificator="name"/>
            <Field className="field" name="Дата рождения" inputType="date" identificator="birth"/>
            <Field className="field" name="Электронная почта" inputType="text" placeholder="mail@example.com" identificator="email"/>
            <Field className="field" name="Телефон" inputType="text" placeholder="+7 900 000-00-00" identificator="phone"/>
			</div>
		</>
	);
}

export default CommonInfo;