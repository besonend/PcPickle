import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchParts } from '../store/parts';

const useStyles = makeStyles(() => ({
    
    placeholder: {

    },

}))

function Part() {
    const classes = useStyles()
    const dispatch = useDispatch();
    const type = window.location.pathname.split('/')[1];
    const id = window.location.pathname.split('/')[2];
    const part = useSelector(state => state.partsReducer[type]);
    let createHTML = '';

    useEffect(() => {
        dispatch(fetchParts())
    }, [dispatch])

    if (part === undefined) {
        return null;
    }
    else if (type === 'cases') {
        createHTML = (
            <>
                <h2 style={{ textAlign: "center" }} className={classes.placeholder}>Size: {part[id].size}</h2>
            </>
        )
    }
    else if (type === 'mobos') {
        createHTML = (
            <>
                <h2 style={{ textAlign: "center" }}>Size: {part[id].size}</h2>
            </>
        )
    }
    else if (type === 'cpus') {
        createHTML = (
            <>
                <h2 style={{ textAlign: "center" }}>Clock Speed: {part[id].clockSpeed}GHz</h2>
            </>
        )
    }
    else if (type === 'hardDrives') {
        console.log(part[id])
        createHTML = (
            <>
                <h2 style={{ textAlign: "center" }}>SSD: {(`${part[id].SSD}`).toUpperCase()}</h2>
                <h2 style={{ textAlign: "center" }}>Storage: {part[id].gbSize}GBs</h2>
            </>
        )
    }
    else if (type === 'coolers') {
        createHTML = (
            <>
            </>
        )
    }
    else if (type === 'gpus') {
        createHTML = (
            <>
                <h2 style={{ textAlign: "center" }}>VRAM: {part[id].VRAM}GBs</h2>
            </>
        )
    }
    else if (type === 'powerSupplies') {
        createHTML = (
            <>
                <h2 style={{ textAlign: "center" }}>Watts: {part[id].watts}W</h2>
            </>
        )
    }
    else if (type === 'ram') {
        createHTML = (
            <>
                <h2 style={{ textAlign: "center" }}>GBs: {part[id].gbSize}GBs per stick</h2>
            </>
        )
    }

    return (
        <>
            <h1 style={{ textAlign: "center" }}>{part[id].name}</h1>
            <h2 style={{ textAlign: "center" }}>Brand: {part[id].manufacturer}</h2>
            {createHTML}
        </>
    );
}

export default Part;
