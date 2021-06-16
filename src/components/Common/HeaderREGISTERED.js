import React, { useState } from "react";
import { useSelector } from 'react-redux';

import "./../../styles/_Common/header.scss";

const CHOOSE_PATH = "http://localhost:4200/Choose";
const ADD_PATH = "http://localhost:4200/addcar";

function HeaderREGISTERED() {

    const [mobileSwitch, setSwitch] = useState(false); 
    
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

    return (
        <>
            <header>
                <button className="logo">
                    <img src="./assets/SkillDriveLogo.svg" alt="logo"></img>
                </button>
                <div className="PcMenu">
                    <nav>
                        <a href={ CHOOSE_PATH }>Бронирования</a>
                        <a href={ ADD_PATH }>Мои автомобили</a>
                        <a>Сообщения</a>
                    </nav>
                    <div class="avatar">{ useSelector(state => state.authorization.user.email) }</div>
                </div>
                <button className="burger">
                        <img id="burger" onClick={ showMobile } src="./assets/burger.svg" alt="menu"></img>
                </button>
            </header>
        </>
    );
}

export default HeaderREGISTERED;