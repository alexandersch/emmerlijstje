import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import * as authenticationActions from '../actions/authentication';
import { Link, withRouter } from 'react-router-dom';

const BucketList = ({ authentication, match }) => {
    const [ state, setState ] = useState({ bucketLists: null, isFetching: true, bucketList: null });
    const bucketList = match.params.list;
    const user = match.params.user;

    useEffect(() => {
        if (bucketList) {
            fetch('/api/bucketlist/' + bucketList).then(r => r.json()).then((data) => {
                setState({ bucketList: data, isFetching: false })
            }).catch(() => setState({ bucketList: null, isFetching: false }));
        } else {
            if (user) {
                fetch('/api/user/bucketlists').then(r => r.json()).then((data) => {
                    setState({ bucketLists: data, isFetching: false })
                }).catch(() => setState({ bucketLists: null, isFetching: false }));
            }
        }
    }, [ user ]);

    if (bucketList) {
        return (
            <Grid container>
                <Grid item xs={ 12 }>
                    { !state.isFetching && state.bucketList ? (
                        <React.Fragment>
                            <Typography variant={ 'h4' }>{ `${ state.bucketList.name }` }</Typography>
                            <Typography component={ 'span' } variant={ 'subheading' }>
                                { user && `Emmerlijstje van ${ state.bucketList.user.displayName }` }
                            </Typography>
                        </React.Fragment>
                    ) : <div/> }

                </Grid>
            </Grid>
        );
    }

    return (
        <Grid container>
            <Grid item xs={ 12 }>
                <Typography variant={ 'h4' } gutterBottom>
                    { authentication.user && user === authentication.user.username || !user
                        ? 'Jouw emmerlijstjes'
                        : `Emmerlijstjes van ${ user.displayName }`
                    }
                </Typography>
            </Grid>

            <Grid item xs={ 12 }>
                { state.isFetching ? <div/> : state.bucketLists.length > 0 ? <div>
                    { state.bucketLists.map((list) => {
                        return <Typography key={ list.slug }>
                            <Link to={ `/u/${ list.user.username }/${ list.slug }` }>
                                { list.name }
                                { authentication.user && user !== authentication.user.username && `van ${ list.user }` }
                            </Link>
                        </Typography>
                    }) }
                </div> : <Typography>Nog geen emmerlijstjes...</Typography> }
            </Grid>
        </Grid>
    );
};

export default connect((state) => ({ ...state }), { ...authenticationActions })(withRouter(BucketList));