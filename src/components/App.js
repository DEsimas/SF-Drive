import React from "react";

import AboutUs from "./AboutUs.js";
import FAQ from "./FAQ.js";

function App(){

    let [page, changePage] = React.useState(<AboutUs/>);

    // changePage(<FAQ/>)

    return page;
}

export default App;