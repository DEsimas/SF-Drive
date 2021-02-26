import React from "react";

import Person from "./Person.js";
import "./../../styles/AboutUs/team.scss"

function Team(props) {
	return (
		<section className="sectionName">
			<h2 className="header">Команда</h2>
            <div className="team">
                <Person className="person" img="II" name="Иван Иванов" profession="СЕО"/>
                <Person className="person" img="AS" name="Алексей Смирнов" profession="Frontend-разработчик"/>
                <Person className="person" img="DI" name="Денис Ярцев" profession="Backend-разработчик"/>
                <Person className="person" img="NM" name="Николай Морозов" profession="Дизайнер"/>
                <Person className="person" img="ID" name="Ирина Деева" profession="Копирайтер"/>
                <Person className="person" img="MS" name="Мария Стрелкова" profession="SMM"/>
            </div>
		</section>
	);
}

export default Team;