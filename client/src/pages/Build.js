import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBuild } from '../store/builds';
import { fetchParts } from '../store/parts';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({

});


function Build() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const id = window.location.pathname.split('/')[2];

    useEffect(() => {
        dispatch(fetchBuild(id));
        dispatch(fetchParts());
    }, [dispatch, id])

    const build = useSelector(state => state.buildsReducer);
    const parts = useSelector(state => state.partsReducer);

    if (build.caseId === undefined || parts.cases === undefined) {
        return null;
    }

    console.log(build.caseId);
    console.log(parts.cases[build.caseId]);

    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1>This is a build</h1>
                <h2>Case</h2>
                <Button>
                    <img src="https://cdn4.iconfinder.com/data/icons/computer-hardware-and-devices-1/512/desktop-512.png" alt="Why" style={{ width: "7%", height: "7%" }} />
                    {parts.cases[build.caseId].name}
                </Button>
                <TableContainer component={Paper} style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Part Type</TableCell>
                                <TableCell>Price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <img src="https://cdn4.iconfinder.com/data/icons/computer-hardware-and-devices-1/512/desktop-512.png" alt="Why" style={{ width: "5%", height: "7%" }} />
                                    <h4>{parts.cases[build.caseId].name}</h4>
                                </TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    );
}

export default Build;
