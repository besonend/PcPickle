import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBuilds } from '../store/builds';



function Build() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user.id)
    const id = window.location.pathname.split('/')[2];
    console.log(id);

    useEffect(() => {
        dispatch(fetchBuilds(user))
    }, [dispatch, user])

    return (
        <>
            <h1>This is a build</h1>
        </>
    );
}

export default Build;
