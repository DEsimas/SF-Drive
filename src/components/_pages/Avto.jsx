import React from 'react';
import { connect } from 'react-redux';
import Avto from '../ChooseAvto/Avto';
import { add_new_chat } from '../../redux/messages/actions';

const AvtoContainer = props => ((<Avto {...props} />));

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    add_new_chat
};

export default connect(mapStateToProps, mapDispatchToProps)(AvtoContainer);