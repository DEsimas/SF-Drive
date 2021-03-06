import React, { useState } from 'react';

import './../../styles/Authorization/Authorization.scss';

function Recovery(props) {

    const [email, setEmail] = useState("");    
    const [pwd, setPwd] = useState("");
    const [REpwd, setREpwd] = useState("");



    return (
        <>
            <div className="recTopSection">
                <img src="./assets/backArrow.svg"/>
                <img src="./assets/cross.svg"/>
            </div>
            <div className="recContent">
                <img src="./assets/recImage.svg"/>
                <h1 className="recHeader">Восстановление пароля</h1>
                <p className="recPara">Введите вашу почту для письма с подтверждением (которого ещё нет) и придумайте новый пароль</p>
                <p className="recWarning"></p>
            </div>
            <div className="recInputs">
                <input onChange={e => setEmail(e.target.value)} value={email} placeholder="Электронная почта"></input>
                <input onChange={e => setPwd(e.target.value)} value={pwd} placeholder="Новый пароль" type="password"></input>
                <input onChange={e => setREpwd(e.target.value)} value={REpwd} placeholder="Повторите пароль" type="password"></input>
            </div>
            <button className="recSend">Отправить</button>
        </>
    );
}

export default Recovery;