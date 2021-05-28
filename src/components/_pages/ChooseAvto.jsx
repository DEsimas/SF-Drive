import React from 'react';
import { connect } from 'react-redux';

import { get_recommendations } from './../../redux/chooseAvto/actions';

import ChooseAvto from '../ChooseAvto/ChooseAvto';

const ChooseAvtoContainer = props => ((<ChooseAvto {...props} />));

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    get_recommendations
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseAvtoContainer);