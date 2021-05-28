import React from 'react';
import { connect } from 'react-redux';

import { registration_send } from '../../redux/registration/actions';

import Registration from '../Registration/Registration';

const RegistrationContainer = props => ((<Registration {...props} />));

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  registration_send
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer)