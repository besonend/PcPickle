import { Divider, Grid } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    bar: {
        backgroundColor: "#95b73c",
        justifyContent: "center",
        alignItems: "center",
        margin: "0px",
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
                    <NavLink to='/Cases' className={classes.link}>Cases</NavLink>
                </Grid>
                <Grid item>
                    <NavLink to='/MotherBoards' className={classes.link}>Mother Boards</NavLink>
                </Grid>
                <Grid item>
                    <NavLink to='/CPU' className={classes.link}>CPU</NavLink>
                </Grid>
                <Grid item>
                    <NavLink to='/RAM' className={classes.link}>RAM</NavLink>
                </Grid>
                <Grid item>
                    <NavLink to='/PowerSupply' className={classes.link}>Power Supplies</NavLink>
                </Grid>
                <Grid item>
                    <NavLink to='/Cooler' className={classes.link}>Coolers</NavLink>
                </Grid>
                <Grid item>
                    <NavLink to='/GPU' className={classes.link}>GPU</NavLink>
                </Grid>
                <Grid item>
                    <NavLink to='/NetworkCard' className={classes.link}>Network Cards</NavLink>
                </Grid>
                <Grid item>
                    <NavLink to='/HardDrive' className={classes.link}>Hard Drives</NavLink>
                </Grid>
            </Grid>
            <Divider />
        </>
    );
}
export default PartsBar;
