import React from 'react';
import { connect } from 'react-redux';

import { recoverySendRequest } from './../redux/recovery/actions';

import Recovery from './Recovery/Recovery';

const RecoveryContainer = props => ((<Recovery {...props} />));

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    recoverySendRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(RecoveryContainer);