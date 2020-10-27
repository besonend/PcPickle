import React, { useEffect } from 'react';
import { useState } from 'react'
import { login, registerErrors, clearErrors } from '../store/auth'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Box, Button, FormControl, Grid } from '@material-ui/core';



const useStyles = makeStyles(() => ({

}))


function LoginPage() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState("");
    const authErrors = useSelector(state => state.auth.errors);

    useEffect(() => {
        dispatch(clearErrors())
    }, [dispatch])

    useEffect(() => {
        if (authErrors) setErrors(Object.values(authErrors))
    }, [authErrors])


    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!username || !password) {
            await dispatch(registerErrors({ "1": "Must enter username and password" }));
        } else {
            const res = await dispatch(login(username, password));

            if (res.errors) {
                await dispatch(registerErrors({ "1": "Incorrect username or password!" }));
            }
            else {
                window.location.href = "/";
            }
        }
    }

    const demoLogin = async (e) => {
        e.preventDefault();
        await dispatch(login('DemoUser', 'password'));
        window.location.href = "/";
    }

    return (
        <>
            <Grid container style={{ justifyContent: "center", marginTop: "5%" }}>
                <Box border={1} style={{ padding: "2%" }}>
                    <div className={classes.root} >
                        <h1>Welcome to PC Pickle</h1>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <button onClick={demoLogin}>Login As a Demo User</button>
                        </div>
                        <div style={{ color: "red", display: "flex", flexDirection: "column" }}>
                            {errors ? errors.map((err, i) => {
                                return (<p style={{ marginTop: "3px", marginBottom: "3px" }} key={i}>{errors[i]}</p>)
                            }) : ""}
                        </div>
                        <form className='login-form' method="PUT" action="/api/session" onSubmit={handleSubmit}>
                            <FormControl>
                                <TextField type="text" placeholder="username" name="username" value={username} onChange={e => setUsername(e.target.value)} />
                                <TextField type="password" placeholder="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                                <Button type="submit">Log in</Button>
                            </FormControl>
                        </form>
                        <NavLink to="/signup"><p>Don't have an account?  Sign Up</p></NavLink>
                    </div>
                </Box>
            </Grid>
        </>

    )

}

export default LoginPage;
