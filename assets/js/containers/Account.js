import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Login from './Login';

const Account = ({ user, csrf }) => {

    return (
        <React.Fragment>

            <Grid container justify="center">
                <Grid item xs={ 12 }>
                    { user && (
                        <Typography align={ 'center' } variant={ 'h3' }>Account</Typography>
                    ) || <Login/> }
                </Grid>
            </Grid>

            {/*<Card>*/ }
            {/*    <CardContent/>*/ }
            {/*</Card>*/ }

        </React.Fragment>
    );
};

export default Account;