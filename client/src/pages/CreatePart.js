import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { FormControl, Grid, InputLabel, MenuItem, Select } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { makePart } from '../store/parts';


function CreatePart() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [manufacturer, setManufacturer] = useState("");
    const [pictureUrl, setPictureUrl] = useState("");
    const [price, setPrice] = useState("");
    const [size, setSize] = useState("");
    const [clockSpeed, setClockSpeed] = useState("");
    const [liquid, setLiquid] = useState("");
    const [SSD, setSSD] = useState("");
    const [gbSize, setgbSize] = useState("");
    const [VRAM, setVRAM] = useState("");
    const [watts, setWatts] = useState("");
    const type = window.location.pathname.split('/')[2];
    let createHTML = '';

    if (type === 'case') {
        createHTML = (
            <>
                <FormControl>
                    <InputLabel>Size</InputLabel>
                    <Select placeholder="size" name="size" value={size} onChange={e => setSize(e.target.value)}>
                        <MenuItem value={1}>Small</MenuItem>
                        <MenuItem value={2}>Medium</MenuItem>
                        <MenuItem value={3}>Large</MenuItem>
                    </Select>
                </FormControl>
            </>
        )
    }
    else if (type === 'motherboard') {
        createHTML = (
            <>
                <FormControl>
                    <InputLabel>Size</InputLabel>
                    <Select placeholder="size" name="size" value={size} onChange={e => setSize(e.target.value)}>
                        <MenuItem value={1}>Small</MenuItem>
                        <MenuItem value={2}>Medium</MenuItem>
                        <MenuItem value={3}>Large</MenuItem>
                    </Select>
                </FormControl>
            </>
        )
    }
    else if (type === 'cpu') {
        createHTML = (
            <>
                <FormControl>
                    <TextField type="number" placeholder="Clock Speed (GHz)" name="clockSpeed" value={clockSpeed} onChange={e => setClockSpeed(e.target.value)} />
                </FormControl>
            </>
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(makePart(type, name,
            manufacturer, pictureUrl,
            price, size,
            clockSpeed, liquid,
            SSD, gbSize,
            VRAM, watts));
        setPictureUrl("");
    }

    return (
        <Grid>
            <form method="POST" action="/api/parts" onSubmit={handleSubmit}>
                <FormControl>
                    <TextField type="text" placeholder="name" name="name" value={name} onChange={e => setName(e.target.value)} />
                    <TextField type="text" placeholder="manufacturer" name="manufacturer" value={manufacturer} onChange={e => setManufacturer(e.target.value)} />
                    <TextField type="url" placeholder="pictureUrl" name="pictureUrl" value={pictureUrl} onChange={e => setPictureUrl(e.target.value)} />
                    <TextField type="number" placeholder="price" name="price" value={price} onChange={e => setPrice(e.target.value)} />
                    {createHTML}
                    <button type="submit">Create</button>
                </FormControl>
            </form>
        </Grid>
    );
}
export default CreatePart;
