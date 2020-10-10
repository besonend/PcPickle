import React, { useEffect } from 'react';
import { useState } from 'react'
import { login, registerErrors, clearErrors } from '../store/auth'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({

}))


function LoginPage() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState("")
    const authErrors = useSelector(state => state.auth.errors)

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
                document.location.reload();
            }
        }
    }

    const demoLogin = async (e) => {
        e.preventDefault();
        await dispatch(login('DemoUser', 'password'));
        document.location.reload();
    }

    return (
        <>
            <div id="main-content-login">
                <h1>Welcome to Pickle</h1>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <button onClick={demoLogin}>Login As a Demo User</button>
                </div>
                <div style={{ color: "red", display: "flex", flexDirection: "column" }}>
                    {errors ? errors.map((err, i) => {
                        return (<p style={{ marginTop: "3px", marginBottom: "3px" }} key={i}>{errors[i]}</p>)
                    }) : ""}
                </div>
                <form className='login-form' method="PUT" action="/api/session" onSubmit={handleSubmit}>
                    <div>
                        <TextField type="text" placeholder="username" name="username" value={username} onChange={e => setUsername(e.target.value)} />
                        <TextField type="password" placeholder="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button type="submit">Log in</button>
                </form>
                <NavLink to="/signup"><p>Don't have an account?  Sign Up</p></NavLink>
            </div>
        </>

    )

}

export default LoginPage;
