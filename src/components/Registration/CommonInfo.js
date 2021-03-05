import React from "react";

import Field from './Field.js';

function CommonInfo(props) {
	return (
		<>
			<h2 className="InfoHeader">Информация о вас</h2>
			<div className="inputs">
            	<Field value={props.value[0]} change={props.change[0]} className="field" name="ФИО" inputType="text" placeholder="ФИО полностью" identificator="name"/>
            	<Field value={props.value[1]} change={props.change[1]} className="field" name="Дата рождения" inputType="date" identificator="birth"/>
            	<Field value={props.value[2]} change={props.change[2]} className="field" name="Электронная почта" inputType="text" placeholder="mail@example.com" identificator="email"/>
            	<Field value={props.value[3]} change={props.change[3]} className="field" name="Телефон" inputType="text" placeholder="+7 900 000-00-00" identificator="phone"/>
				<Field value={props.value[4]} change={props.change[4]} className="field" name="Пароль" inputType="password" placeholder="Введите пароль тут" identificator="password"/>
			</div>
		</>
	);
};

export default CommonInfo;