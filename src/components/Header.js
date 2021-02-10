import React from "react";

function Header() {

    return (
        <>
            <header>
                <button>
                    <img src="./assets/SkillDriveLogo.svg" alt="logo"></img>
                </button>
                <div>
                    <nav>
                        <button>О нас</button>
                        <button>Условия</button>
                        <button>Частые вопросы</button>
                    </nav>
                    <button>Войти</button>
                    <img src="./assets/burger.svg" alt="menu"></img>
                </div>
            </header>
        </>
    );
}

export default Header;