import React from 'react';
import { Button, Grid, Typography, withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

class Login extends React.Component {

    state = {
        username: '',
        password: '',
    };

    handleChange = name => event => {
        this.setState({ [ name ]: event.target.value });
    };

    login = () => {
        const { username, password } = this.state;
        console.log(username, password);


    };

    render() {

        return (
            <React.Fragment>

                <Grid container justify="center">
                    <Grid item xs={ 4 }>

                        <Typography align={ 'center' } variant={ 'h3' }>Inloggen</Typography>


                        <form method="POST" noValidate autoComplete="off">
                            <TextField
                                fullWidth
                                id="username-input"
                                label="Gebruikersnaam"
                                onChange={ this.handleChange('username') }
                                margin="normal"
                            />

                            <TextField
                                fullWidth
                                id="standard-input"
                                label="Wachtwoord"
                                type="password"
                                onChange={ this.handleChange('password') }
                                autoComplete="current-password"
                                margin="normal"
                            />
                            <Button variant="contained" color="primary" onClick={ this.login }>Inloggen</Button>

                        </form>

                    </Grid>
                </Grid>

            </React.Fragment>
        );
    }

}


export default Login;