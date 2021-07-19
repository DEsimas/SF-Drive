import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./../../styles/ChooseAvto/Avto.scss";

function Avto(props) {
    const user = useSelector((state) => (state.authorization.user));
    return (
        <div onClick={() => props.add_new_chat( { chats: user.chats, chat: props._id, id: user._id} ) } className="avto">
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
