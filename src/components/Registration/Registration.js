import React from "react";

import Header from "../Header.js";
import CommonInfo from "./CommonInfo.js";
import Passport from "./Passport.js";
import License from "./License.js";

import "./../../styles/Registration/Registration.scss";

function Registration(props) {
    function apply(){
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

        console.log(data);

        // fetch('http://localhost:8000/', { method: "POST", body: JSON.stringify(data)})
        //     .then(res => res.text())
        //     .then(res => console.log(res))
        //     .catch(e => console.log(e));
    }

	return (
		<>
            <Header/>
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