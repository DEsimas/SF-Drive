import React from "react";
import { Route, Switch } from "react-router-dom";

import AboutUs from "./AboutUs.js";
import FAQ from "./FAQ.js";

function App() {

    return (
    <>
        <Switch>
            <Route path="/"><AboutUs/></Route>
            <Route path="/faq"><FAQ/></Route>
        </Switch>
    </>);
}

export default App;