import React from 'react';
import { connect } from 'react-redux';
import Messages from '../Messages/Messages';

const MessagesContainer = props => ((<Messages {...props} />));

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesContainer);