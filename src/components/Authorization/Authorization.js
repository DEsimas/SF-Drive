import React, { useState } from 'react';

import './../../styles/Authorization/Authorization.scss';

function Authorization(props){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <>
            <div className="exitButtonWrapper">
            <button className="exitButton">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="black"/>
                </svg>
            </button>
            </div>
            <div className="authImageWrapper">
            <img className="authImage" src="./assets/Authorization.svg"></img>
            </div>
            <h1 className="authHeader">Авторизация</h1>
            <div className="authInputs">
                <div className="authField">
			    	<p className="authP">Электронная почта</p>
                	<input onChange={e => setEmail(e.target.value)} value={email} className="input" id="e-mail" placeholder="Электронная почта"/>
			    </div>
                <div className="authField">
                    <p className="authP">Пароль</p>
                    <div className="authPwdWrapper">
            	    <input onChange={e => setPassword(e.target.value)} value={password} type="password" className="input" id="pwd" placeholder="Пароль"/>
                    <button className="forgot">Забыли?</button>
                    </div>
			    </div>
            </div>
            <div className="authSendformWrapper">
            <button onClick={e => props.authorizationSendData({email: email, password: password})} className="authSendform">Войти</button>
            </div>
            <div className="authBottom">
                <a href="http://localhost:4200/Registration" className="authLink">Зарегистрироваться</a>
            </div>
        </>
    );
};

export default Authorization;