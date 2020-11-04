import { Button, Divider, Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { deleteBuild, fetchBuilds } from '../store/builds';


const useStyles = makeStyles(() => ({

}))



function Builds() {
    const classes = useStyles()
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user.id)

    useEffect(() => {
        dispatch(fetchBuilds(user))
    }, [dispatch, user])

    const builds = useSelector(state => state.buildsReducer)
    if (builds.builds === undefined) {
        return null;
    }

    const handleDelete = (e, buildId) => {
        e.preventDefault();
        dispatch(deleteBuild(buildId));
        document.location.reload();
    }

    return (
        <>
            <h2>Featured Builds:</h2>
            <Grid container>
                {Object.values(builds.builds).map(object => {
                    if (object.user_id === 1) {
                        return (
                            <Grid item xs={4} key={object.id}>
                                <div key={object.id}>
                                    <img src={object.pictureUrl} alt="oops" style={{ width: "35vh", height: "35vh" }} />
                                    <div>
                                        <Button key={object.id} href={`/builds/${object.title}`} className={classes.link}>
                                            <p>{object.title}</p>
                                        </Button>
                                        {(user === 1) ? <Button size="small" style={{ color: "red" }} onClick={(e) => handleDelete(e, object.id)}>X</Button> : ''}
                                    </div>
                                </div>
                            </Grid>
                        )
                    }
                    return '';
                })}
            </Grid>
            <Divider />
            <h2>Your Builds:</h2>
            <Grid container>
                {Object.values(builds.userbuilds).map(object => {
                    if (object.user_id === user) {
                        return (
                            <Grid item xs={4} key={object.id}>
                                <div key={object.id}>
                                    <img src={object.pictureUrl} alt="oops" style={{ width: "35vh", height: "35vh" }} />
                                    <div>
                                        <Button key={object.id} href={`/builds/${object.title}`} className={classes.link}>
                                            <p>{object.title}</p>
                                        </Button>
                                        <Button size="small" style={{ color: "red" }} onClick={(e) => handleDelete(e, object.id)}>X</Button>
                                    </div>
                                </div>
                            </Grid>
                        )
                    }
                    return '';
                })}
            </Grid>
        </>
    );
}

export default Builds;
