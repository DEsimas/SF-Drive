import React from "react";

function Avto(props) {

    return (
        <div className="avto">
            <img className="carUserAvatar" src={ props.imgAvatar }></img>
            <span className="carName"><b>{ props.name }</b></span>
            <span className="carPrice">{ props.price }</span>
        </div>
    );
}

export default Avto;