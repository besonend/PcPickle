import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchParts } from '../store/parts';

const useStyles = makeStyles(() => ({

}))


function Parts() {
    const classes = useStyles()
    const dispatch = useDispatch();
    const type = window.location.pathname.split('/')[1];
    const parts = useSelector(state => state.partsReducer)

    useEffect(() => {
        dispatch(fetchParts())
    }, [dispatch])

    if (parts[type] === undefined) {
        return null;
    }

    return (
        <>
            {Object.values(parts[type]).map(object => {
                return (
                    <div key={object.id}>
                        <Button key={object.id} href={`/cases/${object.name}`} className={classes.link}>
                            <img src={`/images/${type}.png`} alt="Not Found" style={{ width: "7%", height: "7%" }} />
                            <p>{object.name}</p>
                        </Button>
                    </div>
                )
            })}
        </>
    );
}

export default Parts;
