import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBuild } from '../store/builds';
import { fetchParts } from '../store/parts';



function Build() {
    const dispatch = useDispatch();
    const id = window.location.pathname.split('/')[2];

    useEffect(() => {
        dispatch(fetchBuild(id));
        dispatch(fetchParts());
    }, [dispatch, id])

    const build = useSelector(state=>state.buildsReducer);
    const parts = useSelector(state=>state.partsReducer);
    console.log(build);
    console.log(parts);

    if(build === undefined || parts === undefined){
        return null;
    }

    return (
        <>
            <h1>This is a build</h1>
            {build.id}
        </>
    );
}

export default Build;
