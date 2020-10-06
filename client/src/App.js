import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import {setUser} from './store/auth'
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import { CssBaseline } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { AuthRoute } from './components/utils/Routes';


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(()=>{
      const loadUser = async () => {
        const res = await fetch("/api/session/current_user");
        if (res.ok) {
          res.data = await res.json(); // current user info
          dispatch(setUser(res.data.user))
        }
        setLoading(false);
      }
      loadUser();
    }, [dispatch]);

  const currentUser = useSelector(state => state.auth.user);

  if (loading) {
    return <p>loading...</p>
  }
  return (
    <>
        <CssBaseline/>
        <BrowserRouter>
            <Switch>
                <AuthRoute exact path='/signup' component={SignupPage} currentUserId={currentUser.id}/>
                <AuthRoute exact path='/login' component={LoginPage} currentUserId={currentUser.id}/>
                <AuthRoute exact path='/' component={Home} currentUserId={currentUser.id}/>
            </Switch>
        </BrowserRouter>
    </>
  );
}

export default App;
