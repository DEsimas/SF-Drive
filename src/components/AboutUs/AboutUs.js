import React from "react";

import Header from "./../Common/Header.js";
import HeaderREGISTERED from "./../Common/HeaderREGISTERED.js";
import Description from "./Description.js";
import Contacts from "./Contacts.js";
import Team from "./Team.js";
import Footer from "./../Common/Footer.js";
import { useSelector } from 'react-redux';


function AboutUs(){
    
    return(
        <>
            {useSelector(state => state.authorization.user) ? <HeaderREGISTERED/> : <Header/>}
            <main>
                <Description/>
                <Contacts/>
                <Team/>
            </main>
            <Footer/>
        </>
    );
}

export default AboutUs;