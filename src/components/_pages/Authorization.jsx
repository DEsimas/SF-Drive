import React from 'react';
import { connect } from 'react-redux';

import { auth_send } from '../../redux/authorization/actions';

import Authorization from '../Authorization/Authorization';

const AuthorizationContainer = props => ((<Authorization {...props} />));

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    auth_send
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationContainer);