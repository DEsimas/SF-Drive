import React from "react";

import AboutUs from "./AboutUs.js";
import FAQ from "./FAQ.js";
import Registration from "./Registration.js";

import "./../styles/hide.scss";

function App() {

    return(
    <>
        <div className="page" id="Registration"><Registration/></div>
        <div className="page hide" id="aboutUs"><AboutUs/></div>
        <div className="page hide" id="FAQ"><FAQ/></div>
    </>);
}

export default App;