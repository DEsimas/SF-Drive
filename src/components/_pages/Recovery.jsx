import React from 'react';
import { connect } from 'react-redux';

import { recoverySendRequest, recovery_send } from '../../redux/recovery/actions';

import Recovery from '../Recovery/Recovery';

const RecoveryContainer = props => ((<Recovery {...props} />));

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    recoverySendRequest,
    recovery_send
};

export default connect(mapStateToProps, mapDispatchToProps)(RecoveryContainer);