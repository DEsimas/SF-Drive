import React from 'react';
import { connect } from 'react-redux';
import Chat from '../Chat/Chat';

const ChatContainer = props => ((<Chat {...props} />));

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesContainer);