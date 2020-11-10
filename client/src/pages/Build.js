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

    console.log(build);
    console.log(parts.cases[build.caseId]);

    function tableBody(type, typeId, name) {
        return (
            <TableRow>
                <TableCell>
                    <Button>
                        {parts[type][build[typeId]].name}
                    </Button>
                </TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{parts[type][build[typeId]].price}</TableCell>
            </TableRow>
        )
    }

    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1>{build.title}</h1>
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
                            {tableBody('cases', 'caseId', 'Case')}
                            {tableBody('mobos', 'motherBoardId', 'Mother Board')}
                            {tableBody('cpus', 'cpuId', 'CPU')}
                            {tableBody('coolers', 'coolerId', 'Cooler')}
                            {tableBody('hardDrives', 'hardDriveId', 'Hard Drive')}
                            {tableBody('ram', 'ramId', 'RAM')}
                            {tableBody('gpus', 'gpuId', 'Graphics Card')}
                            {tableBody('powerSupplies', 'powerSupplyId', 'Power Supply')}
                            {tableBody('networkCards', 'networkCardId', 'Network Card')}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    );
}

export default Build;
