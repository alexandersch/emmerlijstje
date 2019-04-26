import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BucketList from './BucketList';
import CssBaseline from '@material-ui/core/CssBaseline';
import Discover from './Discover';
import Navigation from '../components/Navigation';
import NotFound from './NotFound';
import Account from './Account';

const RootContainer = ({ user, csrf }) => {
    return (
        <Router>
            <CssBaseline/>
            <React.Fragment>
                <Switch>
                    <Route path="/" exact component={ () => <Discover user={ user }/> }/>
                    <Route path="/u/*" component={ () => <BucketList user={ user }/> }/>
                    <Route path="/account" component={ () => <Account user={ user } csrf={ csrf }/> }/>
                    <Route component={ () => <NotFound user={ user }/> }/>
                </Switch>

                <Navigation user={ user }/>

            </React.Fragment>
        </Router>
    );
};

export default RootContainer;