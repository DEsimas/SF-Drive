import React from 'react';
import { connect } from 'react-redux';
import Chat from './../Chat/Chat';
import { add_new_message } from '../../redux/messages/actions';

const ChatContainer = props => ((<Chat {...props} />));

const mapStateToProps = state => ({});

const mapDispatchToProps = { add_new_message };

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);