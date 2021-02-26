import React from "react";

import "./../../styles/AboutUs/contacts.scss";

function Contacts(props) {
	return (
		<section className="cont">
			<h2 className="header">Контакты</h2>
			<div className="contacts">
				<div className="emailWrap">
					<p className="contact">Электронная почта</p>
					<p className="value">drive@skillfactory.com</p>
				</div>
				<div className="phoneWrap">
					<p className="contact">Телефон</p>
					<p className="value">+7 912 123 45 67</p>
				</div>
			</div>
		</section>
	);
}

export default Contacts;