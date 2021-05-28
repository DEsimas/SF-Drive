import React from "react";
import "./../../styles/ChooseAvto/Avto.scss";

function Avto(props) {

    return (
        <div className="avto">
            <img className = "bgCar" src = {props.imgCar}></img>
            <div className="carAvatarWrapper"><img className="carUserAvatar" src={ props.imgAvatar }></img></div>
            <div className="text">
            <span className="carName"><b>{ props.name }</b></span>
            <span className="carPrice">{ "от " + props.price + " ₽/сутки" }</span>
            </div>
        </div>
    );
}

export default Avto;
