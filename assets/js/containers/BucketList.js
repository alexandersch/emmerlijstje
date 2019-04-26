import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid, Typography } from '@material-ui/core';

const BucketList = ({ user }) => {

    return (
        <React.Fragment>
            <CssBaseline/>
            <Grid container justify="center">
                <Grid item xs={ 12 }>
                    <Typography align={ 'center' } variant={ 'h3' }>
                        { user && `Emmerlijstje van ${ user.name }` || 'Jouw emmerlijstje' }
                    </Typography>
                </Grid>

            </Grid>
            {/*<Card>*/ }
            {/*    <CardContent/>*/ }
            {/*</Card>*/ }

        </React.Fragment>
    );
};

export default BucketList;