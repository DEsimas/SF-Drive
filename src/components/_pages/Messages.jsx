import React from 'react';
import { connect } from 'react-redux';
import Messages from '../Messages/Messages';
import { save_my_chats, set_current_chat } from '../../redux/messages/actions';

const MessagesContainer = props => ((<Messages {...props} />));

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    save_my_chats,
    set_current_chat
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesContainer);