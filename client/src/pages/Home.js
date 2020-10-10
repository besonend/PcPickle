import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchParts } from '../store/parts';



function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchParts())
    }, [dispatch])

    const parts = useSelector(state=>state.partsReducer)
    console.log(parts)

    return (
        <>
            <h1>This is the Home Page</h1>
            <h1>Cases</h1>
            <div>
                <NavLink to="/create/case">Add a Case</NavLink>
            </div>
            <h1>Mother Boards</h1>
            <div>
                <NavLink to="/create/motherboard">Add a MotherBoard</NavLink>
            </div>
            <h1>CPUs</h1>
            <div>
                <NavLink to="/create/cpu">Add a CPU</NavLink>
            </div>
            <h1>GPUs</h1>
            <div>
                <NavLink to="/create/gpu">Add a GPU</NavLink>
            </div>
            <h1>Power Supplies</h1>
            <div>
                <NavLink to="/create/powerSupply">Add a Power Supply</NavLink>
            </div>
            <h1>Hard Drives</h1>
            <div>
                <NavLink to="/create/hardDrive">Add a Hard Drive</NavLink>
            </div>
            <h1>Network Cards</h1>
            <div>
                <NavLink to="/create/networkCard">Add a Network Card</NavLink>
            </div>
            <h1>Coolers</h1>
            <div>
                <NavLink to="/create/cooler">Add a Cooler</NavLink>
            </div>
            <h1>RAM</h1>
            <div>
                <NavLink to="/create/ram">Add a RAM</NavLink>
            </div>
        </>
    );
}
export default Home;
