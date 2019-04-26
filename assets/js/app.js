import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import * as Containers from "./containers";
import Navigation from "./components/Navigation";
import store from './store';

render(
    <Provider store={store}>
        <Router>
            <CssBaseline/>

            <Switch>
                <Route path="/" exact component={() => <Containers.Discover/>}/>
                <Route path="/u/*" component={() => <Containers.BucketList/>}/>
                <Route path="/account" component={() => <Containers.Account/>}/>
                <Route component={() => <Containers.NotFound/>}/>
            </Switch>

            <Navigation/>

        </Router>
    </Provider>,
    document.getElementById('react')
);