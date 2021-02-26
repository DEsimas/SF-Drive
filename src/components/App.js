import React from "react";
import { Route, Switch } from "react-router-dom";

import AboutUs from "./AboutUs/AboutUs.js";
import FAQ from "./FAQ/FAQ.js";
import Registration from "./Registration/Registration.js";

function App() {

    return(
    <>
        <Switch>
            <Route path="/AboutUs" className="page" id="aboutUs"><AboutUs/></Route>
            <Route path="/FAQ" className="page" id="FAQ"><FAQ/></Route>
            <Route path="/" className="page" id="Registration"><Registration/></Route>
        </Switch>
    </>);
}

export default App;