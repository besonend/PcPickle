import React, { useEffect } from 'react';
import { useState } from 'react'
import { signup, registerErrors, clearErrors } from '../store/auth'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { Box, FormControl, Grid } from '@material-ui/core';



const useStyles = makeStyles({

})


function SignupPage() {
  const classes = useStyles()
  const dispatch = useDispatch()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [email, setEmail] = useState("")
  const [userToCreate, setUserToCreate] = useState({})
  const [errors, setErrors] = useState([])
  const authErrors = useSelector(state => state.auth.errors)

  useEffect(() => {
    dispatch(clearErrors())
  }, [dispatch])

  useEffect(() => {
    const validateUser = async () => {
      const username = userToCreate.username
      const email = userToCreate.email
      const password = userToCreate.password
      await dispatch(signup(username, email, password))
    }
    if (userToCreate !== {}) {
      validateUser()
    }
  }, [userToCreate, dispatch])

  useEffect(() => {
    if (authErrors) setErrors(Object.values(authErrors))
  }, [authErrors])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!username) {
      dispatch(registerErrors({ "8": "please enter a username" }))
    }
    if (!email) {
      dispatch(registerErrors({ "10": "please enter an email address" }))
    }
    if (!password || !confirmPassword) {
      dispatch(registerErrors({ "11": "please enter a password and confirm it" }))
    }
    if (!(password === confirmPassword)) {
      dispatch(registerErrors({ "9": "password fields do not match" }))
    }
    if ((password === confirmPassword) && username && email) {
      setUserToCreate({ username, email, password })
    }
  }

  const handleUsernameInput = (e) => {
    setUsername(e.target.value)
  }

  const handleEmailInput = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordInput = (e) => {
    setPassword(e.target.value)
  }

  const handleConfirmPasswordInput = (e) => {
    setConfirmPassword(e.target.value)
  }

  return (
    <>
      <Grid container style={{ justifyContent: "center", textAlign: "center", marginTop: "5%" }}>
        <Box border={1} style={{ padding: "2%" }}>
          <div id="main-content-sign-up">
            <h1 className="login-and-signup-header">Sign up for your account</h1>
            <Divider style={{ width: "100%", margin: "10px" }} />
            <div style={{ color: "red", display: "flex", flexDirection: "column", alignContent: "center" }}>
              {errors ? errors.map((err, i) => {
                return (<p style={{ marginTop: "3px", marginBottom: "3px" }} key={i}>{errors[i]}</p>)
              }) : ""}
            </div>
            <form className='signup-form' method="POST" action="/api/session" onSubmit={handleSubmit}>
              <FormControl>
                <TextField InputLabelProps={{ style: { color: "grey" } }} type="text" size="medium" placeholder="username" name="username" value={username} onChange={handleUsernameInput} />
                <TextField InputLabelProps={{ style: { color: "grey" } }} type="text" size="medium" placeholder="email" name="email" value={email} onChange={handleEmailInput} />
                <TextField InputLabelProps={{ style: { color: "grey" } }} type="password" size="medium" placeholder="password" name="password" value={password} onChange={handlePasswordInput} />
                <TextField InputLabelProps={{ style: { color: "grey" } }} style={{ color: "red" }} type="password" size="medium" placeholder="confirm password" name="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordInput} />
                <Button style={{ backgroundColor: "#fbc11a" }} type="submit">Sign Up and Log In</Button>
              </FormControl>
            </form>
            <NavLink id='login-navlink' to="/login"><p id="signUpText">Already have an account?  Log In</p></NavLink>
          </div>
        </Box>
      </Grid>
    </>
  )
}

export default SignupPage;
