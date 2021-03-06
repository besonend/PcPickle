import { AppBar, Button, Toolbar } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/auth';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    appbar: {
        backgroundColor: "#4d9699",
        margin: "0px",
    },

    space: {
        justifyContent: "space-between",
    },

}))


function NavBar() {
    const loggedin = useSelector(state => !!state.auth.user.id);
    const dispatch = useDispatch();
    const classes = useStyles()
    let navarino = '';
    let createBuild = '';

    const handleLogout = () => {
        dispatch(logout());
        document.location.reload();
    }

    if (loggedin) {
        createBuild = <Button href="/createbuild">Create a Build</Button>
        navarino = <Button onClick={handleLogout}>Logout</Button>
    }
    else {
        createBuild = <Button href="/signup">Sign Up</Button>
        navarino = <Button href="/login">Login</Button>
    }

    return (
        <>
            <AppBar position="static" className={classes.appbar}>
                <Toolbar className={classes.space}>
                    <Button href="/">Home</Button>
                    <Button href="/" style={{ marginBottom: "10px" }}>
                        <img src={'https://cdn3.iconfinder.com/data/icons/vegetables-18/100/vegetable_colour-31-512.png'} alt="" style={{ width: "5%", height: "5%" }} />
                        <h1 style={{ color: "#5f6c11" }}>PC PICKLE</h1>
                    </Button>
                    <div>
                        {createBuild}
                        {navarino}
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
}
export default NavBar;
