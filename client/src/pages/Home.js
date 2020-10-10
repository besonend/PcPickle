import React from 'react';
import { NavLink } from 'react-router-dom';


function Home() {
    return (
        <>
            <h1>This is the Home Page</h1>
            <NavLink to="/login">Login</NavLink>
        </>
    );
}
export default Home;
