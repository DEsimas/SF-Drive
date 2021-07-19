import React from 'react';
import { connect } from 'react-redux';

import { get_recommendations, car_name_filter_request } from './../../redux/chooseAvto/actions';
import { add_new_chat } from '../../redux/messages/actions';

import ChooseAvto from '../ChooseAvto/ChooseAvto';

const ChooseAvtoContainer = props => ((<ChooseAvto {...props} />));

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    get_recommendations,
    car_name_filter_request,
    add_new_chat
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseAvtoContainer);