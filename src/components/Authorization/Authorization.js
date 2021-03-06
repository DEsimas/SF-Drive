import React, { useState } from 'react';

import './../../styles/Authorization/Authorization.scss';

function Authorization(props){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <>
            <div className="exitButtonWrapper">
            <button className="exitButton">
                <img src="./assets/cross.svg"/>
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
                    <a href="http://localhost:4200/Recovery" className="forgot">Забыли?</a>
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