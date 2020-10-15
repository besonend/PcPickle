import { Box, Button, Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePart, fetchParts } from '../store/parts';
import Builds from '../components/Builds';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

    add: {
        backgroundColor: "#4d9699",
        color: "#fade98",
    },

    link: {
        textDecoration: "none",
        color: "black",
    }

}))

function Home() {
    const classes = useStyles()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchParts())
    }, [dispatch])

    const parts = useSelector(state => state.partsReducer)
    const user = useSelector(state => state.auth.user.id)
    let cases = '';
    let motherboard = '';
    let ram = '';
    let gpu = '';
    let cpu = '';
    let hardDrive = '';
    let powerSupply = '';
    let networkCard = '';
    let cooler = '';

    if (user === 1) {
        cases = (<div>
            <Button className={classes.add} href="/create/cases">Add a Case</Button>
        </div>)
        motherboard = (<div>
            <Button className={classes.add} href="/create/mobos">Add a MotherBoard</Button>
        </div>)
        cpu = (<div>
            <Button className={classes.add} href="/create/cpus">Add a CPU</Button>
        </div>)
        gpu = (<div>
            <Button className={classes.add} href="/create/gpus">Add a GPU</Button>
        </div>)
        powerSupply = (<div>
            <Button className={classes.add} href="/create/powerSupplies">Add a Power Supply</Button>
        </div>)
        hardDrive = (<div>
            <Button className={classes.add} href="/create/hardDrives">Add a Hard Drive</Button>
        </div>)
        networkCard = (<div>
            <Button className={classes.add} href="/create/networkCards">Add a Network Card</Button>
        </div>)
        cooler = (<div>
            <Button className={classes.add} href="/create/coolers">Add a Cooler</Button>
        </div>)
        ram = (<div>
            <Button className={classes.add} href="/create/ram">Add a RAM</Button>
        </div>)

    }

    if (parts.cases === undefined) {
        return null;
    }
    const handlePartDelete = (e, type, partId) => {
        e.preventDefault();
        dispatch(deletePart(type, partId))
        document.location.reload();
    }

    return (
        <>
            <Grid container spacing={5}>
                <Grid item xs={3}>
                    <Box borderRight={1}>
                        <Box borderBottom={1}>
                            <h1 style={{ textAlign: "center" }}>Parts</h1>
                        </Box>
                        <Box borderBottom={1}>
                            <h2 style={{ textAlign: "center" }}>Cases</h2>
                            {Object.values(parts.cases).map(object => {
                                return (
                                    <div key={object.id}>
                                        <Button key={object.id} href={`/cases/${object.id}`} className={classes.link}>
                                            <img src={"/images/cases.png"} alt="Not Found" style={{ width: "7%", height: "7%" }} />
                                            <p>{object.name}</p>
                                            {(user===1) ? <Button size="small" style={{ color: "red" }} onClick={(e) => handlePartDelete(e, 'cases', object.id)}>X</Button> : ''}
                                        </Button>
                                    </div>
                                )
                            })}
                            {cases}
                        </Box>
                        <Box borderBottom={1}>
                            <h2 style={{ textAlign: "center" }}>Mother Boards</h2>
                            {Object.values(parts.mobos).map(object => {
                                return (
                                    <div key={object.id}>
                                        <Button key={object.id} href={`/mobos/${object.id}`} className={classes.link}>
                                            <img src={"/images/mobos.png"} alt="Not Found" style={{ width: "7%", height: "7%" }} />
                                            <p>{object.name}</p>
                                            {(user===1) ? <Button size="small" style={{ color: "red" }} onClick={(e) => handlePartDelete(e, 'mobos', object.id)}>X</Button> : ''}
                                        </Button>

                                    </div>
                                )
                            })}
                            {motherboard}
                        </Box>
                        <Box borderBottom={1}>
                            <h2 style={{ textAlign: "center" }}>CPUs</h2>
                            {Object.values(parts.cpus).map(object => {
                                return (
                                    <div key={object.id}>
                                        <Button key={object.id} href={`/cpus/${object.id}`} className={classes.link}>
                                            <img src={"/images/cpus.png"} alt="Not Found" style={{ width: "7%", height: "7%" }} />
                                            <p>{object.name}</p>
                                            {(user===1) ? <Button size="small" style={{ color: "red" }} onClick={(e) => handlePartDelete(e, 'cpus', object.id)}>X</Button> : ''}
                                        </Button>
                                    </div>
                                )
                            })}
                            {cpu}
                        </Box>
                        <Box borderBottom={1}>
                            <h2 style={{ textAlign: "center" }}>GPUs</h2>
                            {Object.values(parts.gpus).map(object => {
                                return (
                                    <div key={object.id}>
                                        <Button key={object.id} href={`/gpus/${object.id}`} className={classes.link}>
                                            <img src={"/images/gpus.png"} alt="Not Found" style={{ width: "7%", height: "7%" }} />
                                            <p>{object.name}</p>
                                            {(user===1) ? <Button size="small" style={{ color: "red" }} onClick={(e) => handlePartDelete(e, 'gpus', object.id)}>X</Button> : ''}
                                        </Button>
                                    </div>
                                )
                            })}
                            {gpu}
                        </Box>
                        <Box borderBottom={1}>
                            <h2 style={{ textAlign: "center" }}>Power Supplies</h2>
                            {Object.values(parts.powerSupplies).map(object => {
                                return (
                                    <div key={object.id}>
                                        <Button key={object.id} href={`/powerSupplies/${object.id}`} className={classes.link}>
                                            <img src={"/images/powerSupplies.png"} alt="Not Found" style={{ width: "7%", height: "7%" }} />
                                            <p>{object.name}</p>
                                            {(user===1) ? <Button size="small" style={{ color: "red" }} onClick={(e) => handlePartDelete(e, 'powerSupplies', object.id)}>X</Button> : ''}
                                        </Button>
                                    </div>
                                )
                            })}
                            {powerSupply}
                        </Box>
                        <Box borderBottom={1}>
                            <h2 style={{ textAlign: "center" }}>Hard Drives</h2>
                            {Object.values(parts.hardDrives).map(object => {
                                return (
                                    <div key={object.id}>
                                        <Button key={object.id} href={`/hardDrives/${object.id}`} className={classes.link}>
                                            <img src={"/images/hardDrives.png"} alt="Not Found" style={{ width: "7%", height: "7%" }} />
                                            <p>{object.name}</p>
                                            {(user===1) ? <Button size="small" style={{ color: "red" }} onClick={(e) => handlePartDelete(e, 'hardDrives', object.id)}>X</Button> : ''}
                                        </Button>
                                    </div>
                                )
                            })}
                            {hardDrive}
                        </Box>
                        <Box borderBottom={1}>
                            <h2 style={{ textAlign: "center" }}>Network Cards</h2>
                            {Object.values(parts.networkCards).map(object => {
                                return (
                                    <div key={object.id}>
                                        <Button key={object.id} href={`/networkCards/${object.id}`} className={classes.link}>
                                            <img src={"/images/networkCards.png"} alt="Not Found" style={{ width: "7%", height: "7%" }} />
                                            <p>{object.name}</p>
                                            {(user===1) ? <Button size="small" style={{ color: "red" }} onClick={(e) => handlePartDelete(e, 'networkCards', object.id)}>X</Button> : ''}
                                        </Button>
                                    </div>
                                )
                            })}
                            {networkCard}
                        </Box>
                        <Box borderBottom={1}>
                            <h2 style={{ textAlign: "center" }}>Coolers</h2>
                            {Object.values(parts.coolers).map(object => {
                                return (
                                    <div key={object.id}>
                                        <Button key={object.id} href={`/coolers/${object.id}`} className={classes.link}>
                                            <img src={"/images/coolers.png"} alt="Not Found" style={{ width: "7%", height: "7%" }} />
                                            <p>{object.name}</p>
                                            {(user===1) ? <Button size="small" style={{ color: "red" }} onClick={(e) => handlePartDelete(e, 'coolers', object.id)}>X</Button> : ''}
                                        </Button>
                                    </div>
                                )
                            })}
                            {cooler}
                        </Box>
                        <Box borderBottom={0}>
                            <h2 style={{ textAlign: "center" }}>RAM</h2>
                            {Object.values(parts.ram).map(object => {
                                return (
                                    <div key={object.id}>
                                        <Button key={object.id} href={`/ram/${object.id}`} className={classes.link}>
                                            <img src={"/images/ram.png"} alt="Not Found" style={{ width: "7%", height: "7%" }} />
                                            <p>{object.name}</p>
                                            {(user===1) ? <Button size="small" style={{ color: "red" }} onClick={(e) => handlePartDelete(e, 'ram', object.id)}>X</Button> : ''}
                                        </Button>
                                    </div>
                                )
                            })}
                            {ram}
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={8}>
                    <h1 style={{ textAlign: "center" }}>Builds</h1>
                    <Builds />
                </Grid>
            </Grid>
        </>
    );
}
export default Home;
