import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Menu from '@material-ui/core/Menu';
import TextField from '@material-ui/core/TextField';
import { fetchParts } from '../store/parts';
import { makeBuild } from '../store/builds';
import { Box, Button, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select } from '@material-ui/core';


function CreateBuild() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [Case, setCase] = useState('Case');
    const [motherBoard, setMotherBoard] = useState('Mother Board');
    const [cpu, setCpu] = useState('CPU');
    const [cooler, setCooler] = useState('Cooler');
    const [hardDrive, setHardDrive] = useState('Hard Drive');
    const [gpu, setGpu] = useState('GPU');
    const [ram, setRam] = useState('RAM');
    const [powerSupply, setPowerSupply] = useState('Power Supply');
    const [networkCard, setNetworkCard] = useState('Network Card');
    const user_Id = useSelector(state => state.auth.user.id);
    const part = useSelector(state => state.partsReducer);
    const [anchorEl1, setAnchorEl1] = useState('');
    const [anchorEl2, setAnchorEl2] = useState('');
    const [anchorEl3, setAnchorEl3] = useState('');
    const [anchorEl4, setAnchorEl4] = useState('');
    const [anchorEl5, setAnchorEl5] = useState('');
    const [anchorEl6, setAnchorEl6] = useState('');
    const [anchorEl7, setAnchorEl7] = useState('');
    const [anchorEl8, setAnchorEl8] = useState('');
    const [anchorEl9, setAnchorEl9] = useState('');


    useEffect(() => {
        dispatch(fetchParts())
    }, [dispatch])


    const handleClose = () => {
        setAnchorEl1(null);
        setAnchorEl3(null);
        setAnchorEl4(null);
        setAnchorEl5(null);
        setAnchorEl6(null);
        setAnchorEl7(null);
        setAnchorEl8(null);
        setAnchorEl9(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(makeBuild(title, description, user_Id, Case, motherBoard, cpu,
            cooler, hardDrive, ram, gpu, powerSupply, networkCard));
        window.location.href = "/";
    }

    if (part.cases === undefined) {
        return null;
    }

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Create Build</h1>
            <Grid container style={{ justifyContent: "center", marginTop: "5%" }}>
                <Box border={1} style={{ padding: "2%" }}>
                    <form method="POST" action="/api/builds" onSubmit={handleSubmit}>
                        <FormControl>
                            <TextField placeholder={"Title"} value={title} onChange={(e) => setTitle(e.target.value)} />
                            <TextField placeholder={"Description"} value={description} onChange={(e) => setDescription(e.target.value)} />
                            <Button aria-controls="cases" aria-haspopup="true" onClick={(e) => setAnchorEl1(e.currentTarget)}>
                                {(Case === 'Case') ? Case : Object.values(part.cases[Case].name)}
                            </Button>
                            <Menu
                                id="cases"
                                anchorEl={anchorEl1}
                                keepMounted
                                open={Boolean(anchorEl1)}
                                onClose={handleClose}
                            >
                                {Object.values(part.cases).map(object => {
                                    if (motherBoard === "Mother Board") {
                                        return (
                                            <MenuItem key={object.id} value={object.id} onClick={e => {
                                                setCase(e.target.value);
                                                handleClose();
                                            }}>
                                                {object.name}
                                            </MenuItem>
                                        )
                                    }
                                    else {
                                        if (object.size === part.mobos[motherBoard].size) {
                                            return (
                                                <MenuItem key={object.id} value={object.id} onClick={e => {
                                                    setCase(e.target.value);
                                                    handleClose();
                                                }}>
                                                    {object.name}
                                                </MenuItem>
                                            )
                                        }
                                    }
                                })}
                            </Menu>
                            <Button aria-controls="mobos" aria-haspopup="true" onClick={(e) => setAnchorEl2(e.currentTarget)}>
                                {(motherBoard === 'Mother Board') ? motherBoard : Object.values(part.mobos[motherBoard].name)}
                            </Button>
                            <Menu
                                id="mobos"
                                anchorEl={anchorEl2}
                                keepMounted
                                open={Boolean(anchorEl2)}
                                onClose={handleClose}
                            >
                                {Object.values(part.mobos).map(object => {
                                    if (Case === 'Case') {
                                        return (
                                            <MenuItem key={object.id} value={object.id} onClick={(e) => {
                                                setMotherBoard(e.target.value);
                                                handleClose();
                                            }}>
                                                {object.name}
                                            </MenuItem>
                                        )
                                    }
                                    else {
                                        if (object.size === part.cases[Case].size) {
                                            return (
                                                <MenuItem key={object.id} value={object.id} onClick={(e) => {
                                                    setMotherBoard(e.target.value);
                                                    handleClose();
                                                }}>
                                                    {object.name}
                                                </MenuItem>
                                            )
                                        }
                                    }
                                })}
                            </Menu>
                            <Button type="submit">Create</Button>
                        </FormControl>
                    </form>
                </Box>
            </Grid>
        </>
    );
}

export default CreateBuild;
