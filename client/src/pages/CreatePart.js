import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { Box, Button, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select } from '@material-ui/core';
import { makePart } from '../store/parts';



function CreatePart() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [manufacturer, setManufacturer] = useState("");
    const [pictureUrl, setPictureUrl] = useState("");
    const [price, setPrice] = useState("");
    const [size, setSize] = useState("");
    const [clockSpeed, setClockSpeed] = useState("");
    const [liquid, setLiquid] = useState(false);
    const [SSD, setSSD] = useState("");
    const [gbSize, setgbSize] = useState("");
    const [VRAM, setVRAM] = useState("");
    const [watts, setWatts] = useState("");
    const type = window.location.pathname.split('/')[2];
    let createHTML = '';

    if (type === 'cases') {
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
    else if (type === 'mobos') {
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
    else if (type === 'cpus') {
        createHTML = (
            <>
                <FormControl>
                    <TextField type="number" placeholder="Clock Speed (GHz)" name="clockSpeed" value={clockSpeed} onChange={e => setClockSpeed(e.target.value)} />
                </FormControl>
            </>
        )
    }
    else if (type === 'coolers') {
        createHTML = (
            <>
                <FormControlLabel
                    control={<Checkbox label="Liquid?" name="liquid" value={liquid} onChange={() => setLiquid(!liquid)} />}
                    label="Liquid?"
                />

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
        window.location.href = "/";
    }

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Create {type.toUpperCase()}</h1>
            <Grid container style={{ justifyContent: "center", marginTop: "5%" }}>
                <Box border={1} style={{ padding: "2%" }}>
                    <form method="POST" action="/api/parts" onSubmit={handleSubmit}>
                        <FormControl>
                            <TextField type="text" placeholder="name" name="name" value={name} onChange={e => setName(e.target.value)} />
                            <TextField type="text" placeholder="manufacturer" name="manufacturer" value={manufacturer} onChange={e => setManufacturer(e.target.value)} />
                            <TextField type="url" placeholder="pictureUrl" name="pictureUrl" value={pictureUrl} onChange={e => setPictureUrl(e.target.value)} />
                            <TextField type="number" placeholder="price" name="price" value={price} onChange={e => setPrice(e.target.value)} />
                            {createHTML}
                            <Button type="submit">Create</Button>
                        </FormControl>
                    </form>
                </Box>
            </Grid>
        </>
    );
}
export default CreatePart;
