import React from "react";

import Header from "./../Header.js";
import Description from "./Description.js";
import Contacts from "./Contacts.js";
import Team from "./Team.js";
import Footer from "./../Footer.js";


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