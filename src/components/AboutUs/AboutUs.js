import React from "react";

import Header from "./../Common/Header.js";
import Description from "./Description.js";
import Contacts from "./Contacts.js";
import Team from "./Team.js";
import Footer from "./../Common/Footer.js";


function AboutUs(){
    
    return(
        <>
            <Header/>
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