import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact render={props => <App {...props} />} />

            <Redirect to="/" />
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);


