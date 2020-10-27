import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Menu from '@material-ui/core/Menu';
import TextField from '@material-ui/core/TextField';
import { fetchParts } from '../store/parts';
import { makeBuild } from '../store/builds';
import { Box, Button, FormControl, Grid, MenuItem } from '@material-ui/core';


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
        setAnchorEl2(null);
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
                                    else if (object.size === part.mobos[motherBoard].size) {
                                        return (
                                            <MenuItem key={object.id} value={object.id} onClick={e => {
                                                setCase(e.target.value);
                                                handleClose();
                                            }}>
                                                {object.name}
                                            </MenuItem>
                                        )
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
                                    else if (object.size === part.cases[Case].size) {
                                        return (
                                            <MenuItem key={object.id} value={object.id} onClick={(e) => {
                                                setMotherBoard(e.target.value);
                                                handleClose();
                                            }}>
                                                {object.name}
                                            </MenuItem>
                                        )
                                    }
                                })}
                            </Menu>
                            <Button aria-controls="cpus" aria-haspopup="true" onClick={(e) => setAnchorEl3(e.currentTarget)}>
                                {(cpu === 'CPU') ? cpu : Object.values(part.cpus[cpu].name)}
                            </Button>
                            <Menu
                                id="cpus"
                                anchorEl={anchorEl3}
                                keepMounted
                                open={Boolean(anchorEl3)}
                                onClose={handleClose}
                            >
                                {Object.values(part.cpus).map(object => {
                                    return (
                                        <MenuItem key={object.id} value={object.id} onClick={(e) => {
                                            setCpu(e.target.value);
                                            handleClose();
                                        }}>
                                            {object.name}
                                        </MenuItem>
                                    )
                                })}
                            </Menu>
                            <Button aria-controls="gpus" aria-haspopup="true" onClick={(e) => setAnchorEl4(e.currentTarget)}>
                                {(gpu === 'GPU') ? gpu : Object.values(part.gpus[gpu].name)}
                            </Button>
                            <Menu
                                id="gpus"
                                anchorEl={anchorEl4}
                                keepMounted
                                open={Boolean(anchorEl4)}
                                onClose={handleClose}
                            >
                                {Object.values(part.gpus).map(object => {
                                    return (
                                        <MenuItem key={object.id} value={object.id} onClick={(e) => {
                                            setGpu(e.target.value);
                                            handleClose();
                                        }}>
                                            {object.name}
                                        </MenuItem>
                                    )
                                })}
                            </Menu>
                            <Button aria-controls="coolers" aria-haspopup="true" onClick={(e) => setAnchorEl5(e.currentTarget)}>
                                {(cooler === 'Cooler') ? cooler : Object.values(part.coolers[cooler].name)}
                            </Button>
                            <Menu
                                id="coolers"
                                anchorEl={anchorEl5}
                                keepMounted
                                open={Boolean(anchorEl5)}
                                onClose={handleClose}
                            >
                                {Object.values(part.coolers).map(object => {
                                    return (
                                        <MenuItem key={object.id} value={object.id} onClick={(e) => {
                                            setCooler(e.target.value);
                                            handleClose();
                                        }}>
                                            {object.name}
                                        </MenuItem>
                                    )
                                })}
                            </Menu>
                            <Button aria-controls="rams" aria-haspopup="true" onClick={(e) => setAnchorEl6(e.currentTarget)}>
                                {(ram === 'RAM') ? ram : Object.values(part.ram[ram].name)}
                            </Button>
                            <Menu
                                id="rams"
                                anchorEl={anchorEl6}
                                keepMounted
                                open={Boolean(anchorEl6)}
                                onClose={handleClose}
                            >
                                {Object.values(part.ram).map(object => {
                                    return (
                                        <MenuItem key={object.id} value={object.id} onClick={(e) => {
                                            setRam(e.target.value);
                                            handleClose();
                                        }}>
                                            {object.name}
                                        </MenuItem>
                                    )
                                })}
                            </Menu>
                            <Button aria-controls="powers" aria-haspopup="true" onClick={(e) => setAnchorEl7(e.currentTarget)}>
                                {(powerSupply === 'Power Supply') ? powerSupply : Object.values(part.powerSupplies[powerSupply].name)}
                            </Button>
                            <Menu
                                id="powers"
                                anchorEl={anchorEl7}
                                keepMounted
                                open={Boolean(anchorEl7)}
                                onClose={handleClose}
                            >
                                {Object.values(part.powerSupplies).map(object => {
                                    return (
                                        <MenuItem key={object.id} value={object.id} onClick={(e) => {
                                            setPowerSupply(e.target.value);
                                            handleClose();
                                        }}>
                                            {object.name}
                                        </MenuItem>
                                    )
                                })}
                            </Menu>
                            <Button aria-controls="hardDrives" aria-haspopup="true" onClick={(e) => setAnchorEl8(e.currentTarget)}>
                                {(hardDrive === 'Hard Drive') ? hardDrive : Object.values(part.hardDrives[hardDrive].name)}
                            </Button>
                            <Menu
                                id="hardDrives"
                                anchorEl={anchorEl8}
                                keepMounted
                                open={Boolean(anchorEl8)}
                                onClose={handleClose}
                            >
                                {Object.values(part.hardDrives).map(object => {
                                    return (
                                        <MenuItem key={object.id} value={object.id} onClick={(e) => {
                                            setHardDrive(e.target.value);
                                            handleClose();
                                        }}>
                                            {object.name}
                                        </MenuItem>
                                    )
                                })}
                            </Menu>
                            <Button aria-controls="networkCards" aria-haspopup="true" onClick={(e) => setAnchorEl9(e.currentTarget)}>
                                {(networkCard === 'Network Card') ? networkCard : Object.values(part.networkCards[networkCard].name)}
                            </Button>
                            <Menu
                                id="networkCards"
                                anchorEl={anchorEl9}
                                keepMounted
                                open={Boolean(anchorEl9)}
                                onClose={handleClose}
                            >
                                {Object.values(part.networkCards).map(object => {
                                    return (
                                        <MenuItem key={object.id} value={object.id} onClick={(e) => {
                                            setNetworkCard(e.target.value);
                                            handleClose();
                                        }}>
                                            {object.name}
                                        </MenuItem>
                                    )
                                })}
                            </Menu>
                            <Button type="submit" style={{ backgroundColor: "#4d9699", color: "#fade98" }}>Create</Button>
                        </FormControl>
                    </form>
                </Box>
            </Grid>
        </>
    );
}

export default CreateBuild;
