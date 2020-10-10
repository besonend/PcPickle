import { Button, Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { fetchBuilds } from '../store/builds';


const useStyles = makeStyles(() => ({

}))



function Builds() {
    const classes = useStyles()
    const dispatch = useDispatch();
    const user = useSelector(state=>state.auth.user)
    console.log(user.id)

    useEffect(() => {
        dispatch(fetchBuilds(user.id))
    }, [dispatch])

    const builds = useSelector(state=>state.buildsReducer)
    if (builds.builds === undefined){
        return null;
    }
    console.log(Object.values(builds.builds))

    return (
        <>
            <h2>Featured Builds:</h2>
            {Object.values(builds.builds).map(object => {
                        return (
                            <div key={object.id}>
                                <Button key={object.id} href={`/builds/${object.title}`} className={classes.link}>
                                    <p>{object.title}</p>
                                </Button>
                            </div>
                        )
                    })}
        </>
    );
}

export default Builds;
