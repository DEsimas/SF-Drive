import React from "react";

import AboutUs from "./AboutUs.js";
import FAQ from "./FAQ.js";

import "./../styles/hide.scss";

function App() {

    return(
    <>
        <div className="page" id="aboutUs"><AboutUs/></div>
        <div className="page hide" id="FAQ"><FAQ/></div>
    </>);
}

export default App;