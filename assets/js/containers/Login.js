import React from 'react';
import {Button, Grid, Typography} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import * as authenticationActions from './../actions/authentication';

class Login extends React.Component {

    state = {
        username: '',
        password: '',
        error: false
    };

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    login = () => {
        const {username, password} = this.state;
        const {userLogin} = this.props;
        userLogin(username, password);
    };

    render() {


        return (
            <React.Fragment>

                <Grid container justify="center">
                    <Grid item xs={12}>

                        <Typography align={'center'} variant={'h3'}>Inloggen</Typography>


                        <form method="POST" noValidate autoComplete="off">
                            <TextField
                                fullWidth
                                id="username-input"
                                label="Gebruikersnaam"
                                onChange={this.handleChange('username')}
                                margin="normal"
                            />

                            <TextField
                                fullWidth
                                id="standard-input"
                                label="Wachtwoord"
                                type="password"
                                onChange={this.handleChange('password')}
                                autoComplete="current-password"
                                margin="normal"
                            />
                            <Button variant="contained" color="primary" onClick={this.login}>Inloggen</Button>

                        </form>

                    </Grid>
                </Grid>

            </React.Fragment>
        );
    }

}


export default connect((state) => ({...state}), {...authenticationActions})
(withRouter(props => <Login  {...props} />));