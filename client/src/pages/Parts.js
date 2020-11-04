import { Button, Grid } from '@material-ui/core';
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
    let image = "";

    useEffect(() => {
        dispatch(fetchParts())
    }, [dispatch])

    if (parts[type] === undefined) {
        return null;
    }

    if(type === 'cases'){
        image = "https://cdn4.iconfinder.com/data/icons/computer-hardware-and-devices-1/512/desktop-512.png";
    }
    else if(type === 'mobos'){
        image = "https://cdn0.iconfinder.com/data/icons/computer-hardware-glyph-1/100/1-21-512.png";
    }
    else if(type === 'cpus'){
        image = "https://cdn1.iconfinder.com/data/icons/computer-hardware-531/64/Processor-chip-cpu-memory-ram-512.png";
    }
    else if(type === 'ram'){
        image = "https://cdn0.iconfinder.com/data/icons/mobile-phone-componets-1/144/mobile-icon_05-512.png";
    }
    else if(type === 'powerSupplies'){
        image = "https://cdn0.iconfinder.com/data/icons/computer-46/100/power_supply-512.png";
    }
    else if(type === 'coolers'){
        image = "https://static.thenounproject.com/png/1576762-200.png";
    }
    else if(type === 'gpus'){
        image = "https://cdn1.iconfinder.com/data/icons/hardware-software/100/gpu-512.png";
    }
    else if(type === 'hardDrives'){
        image = "https://cdn2.iconfinder.com/data/icons/digital-marketing-2-11/64/117-512.png";
    }
    else if(type === 'networkCards'){
        image = "https://cdn0.iconfinder.com/data/icons/internet-devices/128/Set2-08-512.png";
    }


    return (
        <div>
            <h1 style={{ textAlign: "center" }}>{type.toUpperCase()}</h1>
            <Grid container spacing={2}>
                {Object.values(parts[type]).map(object => {
                    return (
                        <>
                            <Grid xs={2} />
                            <Grid xs={8} key={object.id} style={{ textAlign: "center" }}>
                                <Button key={object.id} href={`/${type}/${object.id}`} className={classes.link}>
                                    <img src={`${image}`} alt="Not Found" style={{ width: "7%", height: "7%" }} />
                                    <p>{object.name}</p>
                                </Button>
                            </Grid>
                            <Grid xs={2} />
                        </>
                    )
                })}
            </Grid>
        </div >
    );
}

export default Parts;
