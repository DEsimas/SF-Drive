import React from "react";

function Team(props) {
	return (
		<>
			<h2>Команда</h2>
            <div>
                <div>
                    <img src="assets/II.png" alt="Иван Иванов"></img>
                    <span>Иван Иванов</span>
                    <span>СЕО</span>
                </div>
                <div>
                    <img src="assets/AS.png" alt="Алексей Смирнов"></img>
                    <span>Алексей Смирнов</span>
                    <span>Frontend-разработчик</span>
                </div>
                <div>
                    <img src="assets/DI.png" alt="Денис Ярцев"></img>
                    <span>Денис Ярцев</span>
                    <span>Backend-разработчик</span>
                </div>
                <div>
                    <img src="assets/NM.png" alt="Николай Морозов"></img>
                    <span>Николай Морозов</span>
                    <span>Дизайнер</span>
                </div>
                <div>
                    <img src="assets/ID.png" alt="Ирина Деева"></img>
                    <span>Ирина Деева</span>
                    <span>Копирайтер</span>
                </div>
                <div>
                    <img src="assets/MS.png" alt="Мария Стрелкова"></img>
                    <span>Мария Стрелкова</span>
                    <span>SMM</span>
                </div>
            </div>
		</>
	);
}

export default Team;