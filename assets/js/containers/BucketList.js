import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Grid, Typography} from '@material-ui/core';
import {connect} from "react-redux";
import * as authenticationActions from "../actions/authentication";

const BucketList = ({authentication}) => {

    const {user} = authentication;
    console.log(user)
    return (
        <React.Fragment>
            <CssBaseline/>
            <Grid container justify="center">
                <Grid item xs={12}>
                    <Typography align={'center'} variant={'h4'}>
                        {user && `Emmerlijstje van ${user.displayName}` || 'Jouw emmerlijstje'}
                    </Typography>
                </Grid>

            </Grid>
            {/*<Card>*/}
            {/*    <CardContent/>*/}
            {/*</Card>*/}

        </React.Fragment>
    );
};

export default connect((state) => ({...state}), {...authenticationActions})(BucketList);