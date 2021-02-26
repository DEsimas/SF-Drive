import React from "react";

import Question from "./Question.js"
import "./../../styles/FAQ/questions.scss"

function Questions(props) {

	return (
		<section className="questions">
			<h1>Частые вопросы</h1>
			<p className="para">Отвечаем на вопросы, которые у вас могут возникнуть.</p>
			<div className="wrapper">
				<Question num="0" className="question" question="Могу ли я отменить бронь?" answ="Ответ 1" />
				<Question num="1" className="question" question="Могу ли я вернуть деньги, если не подошёл автомобиль?" answ="Ответ 2" />
				<Question num="2" className="question" question="Что делать, если случилось ДТП?" answ="Ответ 3" />
				<Question num="3" className="question" question="Могу ли я оставить автомобиль в удобном для меня месте?" answ="Данный вопрос обсуждается с собственником, но как правило автомобиль нужно вернуть туда, где вы его получили."/>
				<Question num="4" className="question" question="Что делать, если собственник просит заплатить ему напрямую?" answ="Ответ 5" />
				<Question num="5" className="question" question="Должен ли я заправлять автомобиль?" answ="Ответ 6" />
			</div>
		</section>
	);
}

export default Questions;