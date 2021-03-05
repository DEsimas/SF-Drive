import React from 'react';
import { connect } from 'react-redux';

import Registration from './Registration/Registration';

import { registrationSendData } from './../redux/registration/actions';

class RegistrationContainer extends React.Component {
  render() {
    return (
      <Registration {...this.props} />
    );
  };
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  registrationSendData
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer)