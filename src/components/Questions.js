import React from "react";

import Question from "./Question.js"

function Questions(props) {
	return (
		<section>
			<h1>Частые вопросы</h1>
			<p>Отвечаем на вопросы, которые у вас могут возникнуть.</p>
			<div>
				<Question question="Могу ли я отменить бронь?" answ="Ответ 1" />
				<Question question="Могу ли я вернуть деньги, если не подошёл автомобиль?" answ="Ответ 2" />
				<Question question="Что делать, если случилось ДТП?" answ="Ответ 3" />
				<Question question="Могу ли я оставить автомобиль в удобном для меня месте?" answ="Данный вопрос обсуждается с собственником, но как правило автомобиль нужно вернуть туда, где вы его получили."/>
				<Question question="Что делать, если собственник просит заплатить ему напрямую?" answ="Ответ 5" />
				<Question question="Должен ли я заправлять автомобиль?" answ="Ответ 6" />
			</div>
		</section>
	);
}

export default Questions;