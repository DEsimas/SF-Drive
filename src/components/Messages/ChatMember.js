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
                <img className="avatar" src={ props.avatar }/>
                <div className="info">
                    <span className="name">{ username }</span>
                    <span className="carName">{ props.carName }</span>
                </div>
                <span className="date">{ props.date }</span>
            </div>
		</>
	);
}

export default ChatMember;