import React from 'react';
import { useSelector } from 'react-redux';

import AddCar1 from './step1/AddCar1.jsx';
import Header from './../Common/Header';
import HeaderREGISTERED from './../Common/HeaderREGISTERED';

import "./../../styles/AddCar/step1.scss";

function AddCar(){
    return(
        <>
            {useSelector(state => state.authorization.user) ? <HeaderREGISTERED/> : <Header/>}
            <AddCar1></AddCar1>
        </>
    );
};

export default AddCar;