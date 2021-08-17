import React from 'react';
import { connect } from 'react-redux';
import Chat from './../Chat/Chat';
import { add_new_message, set_current_chat, save_my_chats } from '../../redux/messages/actions';

const ChatContainer = props => ((<Chat {...props} />));

const mapStateToProps = state => (state.messages);

const mapDispatchToProps = { add_new_message, set_current_chat, save_my_chats };

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);