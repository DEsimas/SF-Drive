import React from "react";

import "./../styles/header.scss";

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
                        <button onClick={() => changePage("aboutUs")}>О нас</button>
                        <button>Условия</button>
                        <button onClick={() => changePage("FAQ")}>Частые вопросы</button>
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