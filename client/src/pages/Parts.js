import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchParts } from '../store/parts';

const useStyles = makeStyles(() => ({

}))


function Parts() {
    const classes = useStyles()
    const dispatch = useDispatch();
    const type = window.location.pathname.split('/')[1];
    const parts = useSelector(state => state.partsReducer)

    useEffect(() => {
        dispatch(fetchParts())
    }, [dispatch])

    if (parts[type] === undefined) {
        return null;
    }

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>{type.toUpperCase()}</h1>
            <Grid container spacing={2}>
                {Object.values(parts[type]).map(object => {
                    return (
                        <>
                            <Grid xs={2} />
                            <Grid xs={8} key={object.id} style={{ textAlign: "center" }}>
                                <Button key={object.id} href={`/${type}/${object.id}`} className={classes.link}>
                                    <img src={`/images/${type}.png`} alt="Not Found" style={{ width: "7%", height: "7%" }} />
                                    <p>{object.name}</p>
                                </Button>
                            </Grid>
                            <Grid xs={2} />
                        </>
                    )
                })}
            </Grid>
        </div >
    );
}

export default Parts;
