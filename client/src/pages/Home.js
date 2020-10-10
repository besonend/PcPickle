import { Box, Button, Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchParts } from '../store/parts';
import Builds from './Builds';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

    add: {
        backgroundColor: "#95b73c",
        color: "#553a0f",
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
                                        <Button key={object.id} href={`/cases/${object.name}`} className={classes.link}>
                                            <img src={"/images/cases.png"} alt="Not Found" style={{ width: "7%", height: "7%" }} />
                                            <p>{object.name}</p>
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
                                        <Button key={object.id} href={`/mobos/${object.name}`} className={classes.link}>
                                            <img src={"/images/mobos.png"} alt="Not Found" style={{ width: "7%", height: "7%" }} />
                                            <p>{object.name}</p>
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
                                        <Button key={object.id} href={`/cpus/${object.name}`} className={classes.link}>
                                            <img src={"/images/cpus.png"} alt="Not Found" style={{ width: "7%", height: "7%" }} />
                                            <p>{object.name}</p>
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
                                        <Button key={object.id} href={`/gpus/${object.name}`} className={classes.link}>
                                            <img src={"/images/gpus.png"} alt="Not Found" style={{ width: "7%", height: "7%" }} />
                                            <p>{object.name}</p>
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
                                        <Button key={object.id} href={`/powerSupplies/${object.name}`} className={classes.link}>
                                            <img src={"/images/powerSupplies.png"} alt="Not Found" style={{ width: "7%", height: "7%" }} />
                                            <p>{object.name}</p>
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
                                        <Button key={object.id} href={`/hardDrives/${object.name}`} className={classes.link}>
                                            <img src={"/images/hardDrives.png"} alt="Not Found" style={{ width: "7%", height: "7%" }} />
                                            <p>{object.name}</p>
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
                                        <Button key={object.id} href={`/networkCards/${object.name}`} className={classes.link}>
                                            <img src={"/images/networkCards.png"} alt="Not Found" style={{ width: "7%", height: "7%" }} />
                                            <p>{object.name}</p>
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
                                        <Button key={object.id} href={`/coolers/${object.name}`} className={classes.link}>
                                            <img src={"/images/coolers.png"} alt="Not Found" style={{ width: "7%", height: "7%" }} />
                                            <p>{object.name}</p>
                                        </Button>
                                    </div>
                                )
                            })}
                            {cooler}
                        </Box>
                        <Box borderBottom={0}>
                            <h2 style={{ textAlign: "center" }}>RAM</h2>
                            {Object.values(parts.rams).map(object => {
                                return (
                                    <div key={object.id}>
                                        <Button key={object.id} href={`/rams/${object.name}`} className={classes.link}>
                                            <img src={"/images/rams.png"} alt="Not Found" style={{ width: "7%", height: "7%" }} />
                                            <p>{object.name}</p>
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
