import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import * as Containers from './containers';
import Navigation from './components/Navigation';
import store from './store';
import Paper from '@material-ui/core/Paper';

render(
    <Provider store={ store }>
        <Router>
            <CssBaseline/>

            <Paper className={ 'paper' }>
                <Switch>
                    <Route path="/" exact component={ () => <Containers.Discover/> }/>
                    <Route path="/ontdekken" exact component={ () => <Containers.Discover/> }/>
                    <Route path="/u/:user/:list" component={ () => <Containers.BucketList/> }/>
                    <Route path="/emmerlijstje" component={ () => <Containers.BucketList/> }/>
                    <Route path="/u/:user" component={ () => <Containers.BucketList/> }/>
                    <Route path="/account" component={ () => <Containers.Account/> }/>
                    <Route component={ () => <Containers.NotFound/> }/>
                </Switch>
            </Paper>

            <Navigation/>

        </Router>
    </Provider>,
    document.getElementById('react')
);