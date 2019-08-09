import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Discover = (props) => {

    const [ state, setState ] = useState({ bucketLists: [] });

    useEffect(() => {
        fetch('/api/bucketlist',).then(r => r.json()).then((data) => {
            setState({ bucketLists: data })
        });
    }, []);

    return (
        <React.Fragment>

            <Grid container justify="center">
                <Grid item xs={ 12 }>
                    <Typography variant={ 'h4' } gutterBottom>Ontdek emmerlijstjes van anderen</Typography>
                    { state.bucketLists.map((list) => (
                        <Typography key={ list.slug }>
                            <Link to={ `/u/${ list.user.username }/${ list.slug }` } >
                                { list.name } van { list.user.displayName }
                            </Link>
                        </Typography>
                    )) }
                </Grid>
            </Grid>

        </React.Fragment>
    );
};

export default Discover;