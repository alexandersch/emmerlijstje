import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid, Typography } from '@material-ui/core';

const NotFound = (props) => {


    return (
        <React.Fragment>

            <Grid container justify="center">
                <Grid item xs={ 12 }>
                    <Typography align={ 'center' } variant={ 'h3' }>Niet gevonden</Typography>
                </Grid>
            </Grid>

            {/*<Card>*/ }
            {/*    <CardContent/>*/ }
            {/*</Card>*/ }

        </React.Fragment>
    );
};

export default NotFound;