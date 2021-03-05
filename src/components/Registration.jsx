import React from 'react';
import { connect } from 'react-redux';

import { registrationSendData } from './../redux/registration/actions';

import Registration from './Registration/Registration';

const RegistrationContainer = props => ((<Registration {...props} />));

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  registrationSendData
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer)