import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid, Typography } from '@material-ui/core';

const Discover = (props) => {


    return (
        <React.Fragment>

            <Grid container justify="center">
                <Grid item xs={ 12 }>
                    <Typography align={ 'center' } variant={ 'h4' }>Emmerlijstjes van anderen</Typography>
                </Grid>
            </Grid>

            {/*<Card>*/ }
            {/*    <CardContent/>*/ }
            {/*</Card>*/ }

        </React.Fragment>
    );
};

export default Discover;