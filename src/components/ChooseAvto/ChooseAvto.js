import React from "react";

import { useSelector } from 'react-redux';
import Footer from "../Common/Footer.js";
import Header from "./../Common/Header.js";
import HeaderREGISTERED from "./../Common/HeaderREGISTERED.js";

function ChooseAvto() {

    return (
        <>
            {useSelector(state => state.authorization.user) ? <HeaderREGISTERED/> : <Header/>}
            Hello world!
            <Footer/>
        </>
    )
}

export default ChooseAvto;