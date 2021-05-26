import React, { useState } from "react";

import "./../../styles/_Common/header.scss";

// const ABOUTUS_LINK = "http://192.168.1.37:4200/AboutUs";
// const FAQ_LINK = "http://192.168.1.37:4200/FAQ";

const ABOUTUS_LINK = "http://localhost:4200/AboutUs";
const FAQ_LINK = "http://localhost:4200/FAQ";

function Header() {

    const [mobileSwitch, setSwitch] = useState(false); 

    function changePage(page){
        let pages = document.getElementsByClassName("page");
        for(let i = 0; i < pages.length; i++){
            if(pages[i].id != page) pages[i].classList.add("hide");
            else pages[i].classList.remove("hide");
        }
    }
    function showMobile() {
        if(mobileSwitch){
            document.getElementById("mobileMenu").classList.add("hide");
            document.getElementById("burger").setAttribute("src", "./assets/burger.svg");
            setSwitch(false);
        } else {
            document.getElementById("mobileMenu").classList.remove("hide");
            document.getElementById("burger").setAttribute("src", "./assets/cross.svg");
            setSwitch(true);
        }
    }

    function showAuth(){
        document.getElementById("logIn").classList.remove("hide");
    }

    return (
        <>
            <header>
                <button className="logo">
                    <img src="./assets/SkillDriveLogo.svg" alt="logo"></img>
                </button>
                <div className="PcMenu">
                    <nav>
                        <a href={ ABOUTUS_LINK }>О нас</a>
                        <a>Условия</a>
                        <a href={ FAQ_LINK }>Частые вопросы</a>
                    </nav>
                    <button className="enter" onClick= { showAuth }>Войти</button>
                </div>
                <button className="burger">
                        <img id="burger" onClick={ showMobile } src="./assets/burger.svg" alt="menu"></img>
                </button>
            </header>
        </>
    );
}

export default Header;