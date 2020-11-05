import { AppBar, Grid } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    bar: {
        backgroundColor: "#fbc11a",
        justifyContent: "center",
        alignItems: "center",
    },

    link: {
        textDecoration: "none",
        color: "black",
    },
}))


function PartsBar() {
    const classes = useStyles()

    return (
        <>
            <Grid container spacing={3} className={classes.bar}>
                <Grid item>
                    <NavLink to='/cases' className={classes.link}>Cases</NavLink>
                </Grid>
                <Grid item>
                    <NavLink to='/mobos' className={classes.link}>Mother Boards</NavLink>
                </Grid>
                <Grid item>
                    <NavLink to='/cpus' className={classes.link}>CPU</NavLink>
                </Grid>
                <Grid item>
                    <NavLink to='/ram' className={classes.link}>RAM</NavLink>
                </Grid>
                <Grid item>
                    <NavLink to='/powerSupplies' className={classes.link}>Power Supplies</NavLink>
                </Grid>
                <Grid item>
                    <NavLink to='/coolers' className={classes.link}>Coolers</NavLink>
                </Grid>
                <Grid item>
                    <NavLink to='/gpus' className={classes.link}>GPU</NavLink>
                </Grid>
                <Grid item>
                    <NavLink to='/networkCards' className={classes.link}>Network Cards</NavLink>
                </Grid>
                <Grid item>
                    <NavLink to='/hardDrives' className={classes.link}>Hard Drives</NavLink>
                </Grid>
            </Grid>
        </>
    );
}
export default PartsBar;
