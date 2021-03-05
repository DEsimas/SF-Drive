import React from "react";

import "./../../styles/_Common/header.scss";

function Header() {

    function changePage(page){
        let pages = document.getElementsByClassName("page");
        for(let i = 0; i < pages.length; i++){
            if(pages[i].id != page) pages[i].classList.add("hide");
            else pages[i].classList.remove("hide");
        }
    }

    return (
        <>
            <header>
                <button className="logo">
                    <img src="./assets/SkillDriveLogo.svg" alt="logo"></img>
                </button>
                <div className="PcMenu">
                    <nav>
                        <a href="http://192.168.1.37:4200/AboutUs">О нас</a>
                        <a>Условия</a>
                        <a href="http://192.168.1.37:4200/FAQ">Частые вопросы</a>
                    </nav>
                    <button className="enter">Войти</button>
                </div>
                <button className="burger">
                        <img src="./assets/burger.svg" alt="menu"></img>
                </button>
            </header>
        </>
    );
}

export default Header;