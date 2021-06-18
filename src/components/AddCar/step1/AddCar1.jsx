import React from 'react';
import { connect } from 'react-redux';

import { saveData, car_send } from '../../../redux/addCar/actions';

import AddCar1 from './AddCar1';

const AddCar1Container = props => ((<AddCar1 {...props} />));

const mapStateToProps = state => {return { ...state.authorization, cars: state.saveAvto } };

const mapDispatchToProps = {
  saveData,
  car_send
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCar1Container);