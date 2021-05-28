import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { applyMiddleware, compose, createStore } from "redux";

import rootReducer from './../redux/reducer';
import { Provider, useSelector } from 'react-redux';

import AboutUs from "./AboutUs/AboutUs.js";
import FAQ from "./FAQ/FAQ.js";
import Registration from "./_pages/Registration.jsx";
import Authorization from './_pages/Authorization.jsx';
import Recovery from "./_pages/Recovery.jsx";
import Mobile from "./Common/Mobile.js";

import "./../styles/_Common/authorizationFLOAT.scss";
import "./../styles/_Common/recovery.scss";

import thunk from 'redux-thunk';
import ChooseAvto from "./ChooseAvto/ChooseAvto";
import { load_user } from "../redux/authorization/actions";

const middlewares = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

function App() {

    

    useEffect(() => {
        store.dispatch(load_user());
    });

    return(
    <>
        <Provider store={store}>
            <div id="logIn" className="hide auth"><Authorization/></div>
            <div id="rec" className="hide rec"><Recovery/></div>
            <div id="mobileMenu" className="hide menu"><Mobile/></div>
            <Switch>
                <Route path="/Choose" className="page" id="ChooseAvto"><ChooseAvto/></Route>
                <Route path="/AboutUs" className="page" id="aboutUs"><AboutUs/></Route>
                <Route path="/FAQ" className="page" id="FAQ"><FAQ/></Route>
                <Route path="/Registration" className="page" id="Registration"><Registration/></Route>
                <Route path="/Recovery" className="page" id="Recovery"><Recovery/></Route>
                <Route path="/Auth" className="page" id="Authorization"><Authorization/></Route>
            </Switch>
        </Provider>
    </>);
}

export default App;