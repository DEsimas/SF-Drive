import React from "react";
import { Route, Switch } from "react-router-dom";
import { createStore } from "redux";

import rootReducer from './../redux/reducer';
import { Provider } from 'react-redux';

import AboutUs from "./AboutUs/AboutUs.js";
import FAQ from "./FAQ/FAQ.js";
import Registration from "./Registration.jsx";

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {

    return(
    <>
        <Provider store={store}>
            <Switch>
                <Route path="/AboutUs" className="page" id="aboutUs"><AboutUs/></Route>
                <Route path="/FAQ" className="page" id="FAQ"><FAQ/></Route>
                <Route path="/" className="page" id="Registration"><Registration/></Route>
            </Switch>
        </Provider>
    </>);
}

export default App;