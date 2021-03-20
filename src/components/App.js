import React from "react";
import { Route, Switch } from "react-router-dom";
import { compose, createStore } from "redux";

import rootReducer from './../redux/reducer';
import { Provider } from 'react-redux';

import AboutUs from "./AboutUs/AboutUs.js";
import FAQ from "./FAQ/FAQ.js";
import Registration from "./_pages/Registration.jsx";
import Authorization from './_pages/Authorization.jsx'
import Recovery from "./_pages/Recovery.jsx";
// import createSaga from 'redux-saga';

// const middleware = createSaga();
// const middlewares = [
//     middleware,
// ];

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose;

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {

    return(
    <>
        <Provider store={store}>
            <Switch>
                <Route path="/AboutUs" className="page" id="aboutUs"><AboutUs/></Route>
                <Route path="/FAQ" className="page" id="FAQ"><FAQ/></Route>
                <Route path="/Registration" className="page" id="Registration"><Registration/></Route>
                <Route path="/Recovery" className="page" id="Recovery"><Recovery/></Route>
                <Route path="/" className="page" id="Authorization"><Authorization/></Route>
            </Switch>
        </Provider>
    </>);
}

export default App;