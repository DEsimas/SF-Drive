import React from "react";

import "./../../styles/Messages/ChatMember.scss";

function ChatMember(props) {
    /*props{
        name
        avatar
        carName
        date
    }*/
    const username = props.name.split(' ')[1] + ' ' + props.name.split(' ')[0][0] + '.';
	return (
		<>
            <div className="member">
                <div className = "right">
                    <img className="avatar" src={ props.avatar }/>
                    <div className="info">
                        <p className="Iname">{ username }</p>
                        <p className="IcarName">{ props.carName }</p>
                    </div>
                </div>
                <span className="date">{ props.date }</span>
            </div>
		</>
	);
}

export default ChatMember;