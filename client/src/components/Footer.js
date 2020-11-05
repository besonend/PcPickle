import { Grid } from '@material-ui/core';
import React from 'react';


function Footer() {
    return (
        <>
            <footer style={{ marginTop: "10px", backgroundColor: "#4d9699" }}>
                <Grid container>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4} style={{ textAlign: "center" }}>
                        <h3 style={{ margin: "5px" }}>Creator Links:</h3>
                        <a href="https://www.linkedin.com/in/besonend/" style={{ textDecoration: "none", textAlign: "center", margin: "0", color: "black" }}>LinkedIn</a>
                        <div>
                            <a href="https://github.com/besonend" style={{ textDecoration: "none", textAlign: "center", margin: "0", color: "black" }}>GitHub</a>
                        </div>
                        <div style={{ marginBottom: "15px" }}>
                            <a href="https://besonend.com/" style={{ textDecoration: "none", textAlign: "center", margin: "0", color: "black" }}>Portfolio</a>
                        </div>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "center" }}>
                        <h3 style={{ margin: "5px" }}>Repo:</h3>
                        <a href="https://github.com/besonend/PcPickle" style={{ textDecoration: "none", textAlign: "center", margin: "0", color: "black" }}>GitHub</a>
                    </Grid>
                </Grid>
            </footer>
        </>
    );
}

export default Footer;
