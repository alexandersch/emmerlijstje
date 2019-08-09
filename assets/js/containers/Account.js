import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import Login from './Login';
import {connect} from "react-redux";
import * as authenticationActions from './../actions/authentication';
import Button from "@material-ui/core/Button";

const Account = (props) => {
    const {user} = props.authentication;
    const {userLogout} = props;

    return (
        <React.Fragment>

            <Grid container justify="center">
                <Grid item xs={11} md={6}>
                    {user && (
                        <React.Fragment>
                            <Typography  variant={'h4'}>Account</Typography>

                            <Grid alignContent={"flex-end"}>
                                <Button
                                    onClick={() => userLogout()}
                                    variant={"contained"}
                                    color={"primary"}>
                                    Uitloggen
                                </Button>
                            </Grid>


                        </React.Fragment>
                    ) || <Login/>}
                </Grid>
            </Grid>

        </React.Fragment>
    );
};

export default connect((state) => ({...state}), {...authenticationActions})(Account);