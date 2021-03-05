import React, { useState } from "react";

import Warning from "./Warning.js";
import Header from "./../Common/Header.js";
import CommonInfo from "./CommonInfo.js";
import Passport from "./Passport.js";
import License from "./License.js";

import "./../../styles/Registration/Registration.scss";
import "./../../styles/Registration/Info.scss";

function Registration(props) {

    const getData = () => ({
        name: name,
        birth: birth,
        email: email,
        phone: phone,
        password: password,
        license: {
            name: license,
            date: licensedate
        },
        passport: {
            name: passport_,
            date: passportDate,
            who: passportWho,
            code: passportCode
        }
    });

    const handleErrors = () => {
        //mark incorrect fields
    };

    const handleClick = () => {
        handleErrors();
        props.registrationSendData(getData())
    }

    const [name, setName] = useState("");    
    const [birth, setBirth] = useState("");    
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [passport_, setPassport] = useState("");
    const [passportDate, setPassportDate] = useState("");
    const [passportWho, setPassportWho ] = useState("");
    const [passportCode, setPassportCode] = useState("");
    const [license, setLicense] = useState("");
    const [licensedate, setLicenseDate] = useState("");

	return (
		<>
            <div className="top">
                <Warning/>
                <Header/>
            </div>
            <p className="phase">Шаг 1 из 3</p>
            <h1 className="mainheader">Расскажите о себе</h1>
            <div className="fields">
                <CommonInfo value={[name,birth,email,phone,password]} change={[setName,setBirth,setEmail,setPhone,setPassword]}/>
                <Passport value={[passport_,passportDate,passportWho,passportCode]} change={[setPassport,setPassportDate,setPassportWho,setPassportCode]}/>
                <License value={[license,licensedate]} change={[setLicense,setLicenseDate]}/>
            </div>
            <footer className="bottomsection">
                <button id="sendform" className="sendform isDisabled" onClick={handleClick}>Продолжить</button>
            </footer>
		</>
	);
};

export default Registration;