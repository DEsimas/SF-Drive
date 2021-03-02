import React from "react";

import Header from "../Header.js";
import CommonInfo from "./CommonInfo.js";
import Passport from "./Passport.js";
import License from "./License.js";
import Warning from "./Warning.js"

import "./../../styles/Registration/Registration.scss";

const SERVER_ADDRESS = "http://localhost:8000/";

function Registration(props) {
    function getData(){
        let passport = new Object();
        passport.name = document.getElementById("passport").value;
        passport.who = document.getElementById("passportwho").value;
        passport.date = document.getElementById("passportdate").value;
        passport.code = document.getElementById("passportcode").value;

        let license = new Object();
        license.name = document.getElementById("license").value;
        license.date = document.getElementById("licensedate").value;

        let data = new Object();
        data.name = document.getElementById("name").value;
        data.birth = document.getElementById("birth").value;
        data.email = document.getElementById("email").value;
        data.phone =document.getElementById("phone").value;
        data.passport = passport;
        data.license = license;

        return data;
    }

    function setLoad(){
        document.getElementsByClassName("sendform")[0].innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="path-1-inside-1" fill="white">
        <path d="M24 12C24 9.62662 23.2962 7.30655 21.9776 5.33316C20.6591 3.35977 18.7849 1.8217 16.5922 0.913446C14.3995 0.005194 11.9867 -0.232446 9.65892 0.230577C7.33114 0.693599 5.19295 1.83649 3.51472 3.51472C1.83649 5.19295 0.693599 7.33114 0.230577 9.65892C-0.232446 11.9867 0.00519403 14.3995 0.913446 16.5922C1.8217 18.7849 3.35977 20.6591 5.33316 21.9776C7.30655 23.2962 9.62662 24 12 24V21.7573C10.0702 21.7573 8.18371 21.185 6.57913 20.1129C4.97455 19.0408 3.72393 17.5169 2.98543 15.734C2.24692 13.951 2.05369 11.9892 2.43018 10.0964C2.80667 8.20371 3.73596 6.46513 5.10054 5.10054C6.46513 3.73596 8.20371 2.80667 10.0964 2.43018C11.9892 2.05369 13.951 2.24692 15.734 2.98543C17.5169 3.72393 19.0408 4.97455 20.1129 6.57913C21.185 8.18371 21.7573 10.0702 21.7573 12H24Z"/>
        </mask>
        <path d="M24 12C24 9.62662 23.2962 7.30655 21.9776 5.33316C20.6591 3.35977 18.7849 1.8217 16.5922 0.913446C14.3995 0.005194 11.9867 -0.232446 9.65892 0.230577C7.33114 0.693599 5.19295 1.83649 3.51472 3.51472C1.83649 5.19295 0.693599 7.33114 0.230577 9.65892C-0.232446 11.9867 0.00519403 14.3995 0.913446 16.5922C1.8217 18.7849 3.35977 20.6591 5.33316 21.9776C7.30655 23.2962 9.62662 24 12 24V21.7573C10.0702 21.7573 8.18371 21.185 6.57913 20.1129C4.97455 19.0408 3.72393 17.5169 2.98543 15.734C2.24692 13.951 2.05369 11.9892 2.43018 10.0964C2.80667 8.20371 3.73596 6.46513 5.10054 5.10054C6.46513 3.73596 8.20371 2.80667 10.0964 2.43018C11.9892 2.05369 13.951 2.24692 15.734 2.98543C17.5169 3.72393 19.0408 4.97455 20.1129 6.57913C21.185 8.18371 21.7573 10.0702 21.7573 12H24Z" stroke="white" stroke-width="4" mask="url(#path-1-inside-1)"/>
        </svg>`;
    }

    function delLoad() {
        document.getElementsByClassName("sendform")[0].innerHTML = "Продолжить";
    }

    function markFields(incorrectList) {
        incorrectList.map(el => {
            document.getElementById('W' + el).innerHTML = 'Заполни как надо';
            document.getElementById(el).classList.add('error');
        });
    }

    function apply(){

        setLoad();
        
        fetch(SERVER_ADDRESS, 
        {
            method: "POST",
            body: JSON.stringify(getData()),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.status !== "ok") markFields();
            })
            .catch(e => console.log(e));

        delLoad();
    }

	return (
		<>
            <div className="top">
                <Warning/>
                <Header/>
            </div>
            <p className="phase">Шаг 1 из 3</p>
            <h1 className="mainheader">Расскажите о себе</h1>
            <div className="fields">
                <CommonInfo/>
                <Passport/>
                <License/>
            </div>
            <footer className="bottomsection">
                <button className="sendform isDisabled" onClick={apply}>Продолжить</button>
            </footer>
		</>
	);
}

export default Registration;