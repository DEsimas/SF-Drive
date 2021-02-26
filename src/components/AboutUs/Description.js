import React from "react";

import "./../../styles/AboutUs/description.scss";

function Description() {

    return (
        <section>
            <div className="mainPicWrap"><img className="mainPic" src="./assets/pic.svg" alt=""></img></div>
            <h1 className="aboutUsHeader">О нас</h1>
            <p className="aboutUsText">
                Это учебный проект, созданный с целью получения боевого опыта в разработке настоящего живого веб-приложения. Этот сервис имитирует работу каршеринга, в котором можно не только арендовать автомобили, но и сдавать их в аренду.
            </p>
        </section>
    );
}

export default Description;