import React from "react";

import "./../styles/header.scss";

function Header() {

    return (
        <>
            <header>
                <button className="logo">
                    <img src="./assets/SkillDriveLogo.svg" alt="logo"></img>
                </button>
                <div className="PcMenu">
                    <nav>
                        <button>О нас</button>
                        <button>Условия</button>
                        <button>Частые вопросы</button>
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