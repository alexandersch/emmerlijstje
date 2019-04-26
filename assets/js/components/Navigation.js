import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Public from '@material-ui/icons/Public';
import Person from '@material-ui/icons/Person';
import {Link as RouterLink, withRouter} from 'react-router-dom';

const styles = {
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        background: '#fafafa',
        boxShadow: '0 3px 5px 2px #c6c6c6'
    }
};

const BucketIcon = () => <i className="icofont-bucket" style={{fontSize: '1.4rem'}}/>;

class Navigation extends React.Component {

    constructor(props) {
        super(props);
       
        if (props.location.pathname === '/') {
            this.state = {value: 'discover'}
        } else if (props.location.pathname.includes('/u')) {
            this.state = {value: 'emmerlijstje'};
        } else this.state = {value: props.location.pathname.replace('/', '')};

    }

    handleChange = (event, value) => {
        this.setState({value});
    };


    render() {
        const {classes} = this.props;
        const {value} = this.state;

        return (
            <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>

                <BottomNavigationAction
                    label="Ontdek"
                    value="discover"
                    component={RouterLink}
                    to="/"
                    icon={<Public/>}
                />

                <BottomNavigationAction
                    label="Emmerlijstje"
                    value="emmerlijstje"
                    component={RouterLink}
                    to="/u/alexander"
                    icon={<BucketIcon/>}
                />

                <BottomNavigationAction
                    label="Profiel"
                    value="account"
                    component={RouterLink}
                    to="/account"
                    icon={<Person/>}
                />

            </BottomNavigation>

        );
    }
}

Navigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

const NavigationWithRouter = withRouter(props => <Navigation {...props}/>);

export default withStyles(styles)(NavigationWithRouter);
