import React, { useState } from 'react';

import './../../styles/Authorization/Authorization.scss';

function Authorization(props){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function hide() {
        document.getElementById("logIn").classList.add("hide");
    }

    function showRec(){
        document.getElementById("rec").classList.remove("hide");
        document.getElementById("logIn").classList.add("hide");
    }

    return(
        <>
        <div>
        <div className="authWrapper">        
            <div className="exitButtonWrapper">
            <button onClick={ hide } className="exitButton">
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
                    <a /*href="http://localhost:4200/Recovery"*/ onClick={ showRec } className="forgot">Забыли?</a>
                    </div>
			    </div>
            </div>
            <div className="authSendformWrapper">
            <button onClick={e => props.auth_send({email: email, password: password})} className="authSendform">Войти</button>
            </div>
            <div className="authBottom">
                <a href="http://localhost:4200/Registration" className="authLink">Зарегистрироваться</a>
            </div>
        </div>
        </div>
        </>
    );
};

export default Authorization;