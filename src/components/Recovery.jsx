import React from 'react';
import { connect } from 'react-redux';

import { authorizationSendData } from './../redux/authorization/actions';

import Recovery from './Recovery/Recovery';

const RecoveryContainer = props => ((<Recovery {...props} />));

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RecoveryContainer);