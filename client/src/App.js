import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { setUser } from './store/auth'
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import { CssBaseline } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { AuthRoute } from './components/utils/Routes';
import Home from './pages/Home';
import CreatePart from './pages/CreatePart';
import NavBar from './components/NavBar';
import PartsBar from './components/PartsBar';
import Parts from './pages/Parts';
import Part from './pages/Part';
import Build from './pages/Build';
import Builds from './components/Builds';
import CreateBuild from './pages/CreateBuild';
import Footer from './components/Footer';


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const stats = useSelector(state => state.auth.user);

  useEffect(() => {
    const loadUser = async () => {
      const res = await fetch("/api/session/current_user");
      if (res.ok) {
        res.data = await res.json(); // current user info
        dispatch(setUser(res.data.user))
      }
      setLoading(false);
    }
    loadUser();
  }, [dispatch, stats.id]);

  const currentUser = useSelector(state => state.auth.user);

  if (loading) {
    return <p>loading...</p>
  }
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <NavBar />
        <PartsBar />
        <Switch>
          <Route exact path='/' component={Home} currentUserId={currentUser.id} />
          <AuthRoute exact path='/signup' component={SignupPage} currentUserId={currentUser.id} />
          <AuthRoute exact path='/login' component={LoginPage} currentUserId={currentUser.id} />
          <Route exact path='/create/:part' component={CreatePart} currentUserId={currentUser.id} />
          <Route exact path='/createbuild' component={CreateBuild} currentUserId={currentUser.id} />
          <Route exact path='/builds' component={Builds} currentUserId={currentUser.id} />
          <Route exact path='/builds/:id' component={Build} currentUserId={currentUser.id} />
          <Route exact path='/:part' component={Parts} currentUserId={currentUser.id} />
          <Route exact path='/:part/:id' component={Part} currentUserId={currentUser.id} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}
// seriously why isnt this working
export default App;
