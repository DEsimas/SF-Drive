import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import "./../../styles/Chat/message.scss";

//single message component
function Message(props) {
    const message = props.message;
    const user = useSelector(state => (state.authorization.user));
    let is_mine = true;
    if(user) {
        is_mine = message.senderID == user._id ? true : false;
    }

    //message shoud have classes msg_wrp, msg
    //if it is yours also msgM, my
    //else msgH, his

    return(
        <div className={ is_mine ? "msg_wrp msgM" : "msg_wrp msgH" } >
            <div className={ is_mine ? "msg my" : "msg his" }>
                <p className="text">{ message.content }</p>
                <span className="date">{ message.date }</span>
            </div>
        </div>
    );
};

export default Message;