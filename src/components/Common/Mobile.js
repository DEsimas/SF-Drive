import React from "react";

import "./../../styles/_Common/mobile.scss";

// const ABOUTUS_LINK = "http://192.168.1.37:4200/AboutUs";
// const FAQ_LINK = "http://192.168.1.37:4200/FAQ";

const ABOUTUS_LINK = "http://localhost:4200/AboutUs";
const FAQ_LINK = "http://localhost:4200/FAQ";
const AUTH_LINK = "http://localhost:4200/Auth"

function Mobile() {

    return (
        <>
        <div className="mobileMenu">
            <div className="midSection">
                <a href={ ABOUTUS_LINK } className="aboutus">О нас</a>
                <a className="conditions">Условия</a>
                <a href={ FAQ_LINK } className="faq">Частые вопросы</a>
            </div>
            <div className="downSection">
                <a href = { AUTH_LINK } className="enter">Войти</a>
            </div>
        </div>
        </>
    );
}

export default Mobile;