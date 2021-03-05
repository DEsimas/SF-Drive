import React from 'react';
import { connect } from 'react-redux';

import { authorizationSendData } from './../redux/authorization/actions';

import Authorization from './Authorization/Authorization';

const AuthorizationContainer = props => ((<Authorization {...props} />));

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    authorizationSendData
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationContainer);