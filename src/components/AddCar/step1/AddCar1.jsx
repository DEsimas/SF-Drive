import React from 'react';
import { connect } from 'react-redux';

import { saveData } from '../../../redux/addCar/actions';

import AddCar1 from './AddCar1';

const AddCar1Container = props => ((<AddCar1 {...props} />));

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  saveData
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCar1Container);