import { Grid } from '@material-ui/core';
import React from 'react';


function Footer() {
    return (
        <>
            <footer style={{ backgroundColor: "#4d9699" }}>
                <Grid container>
                    <Grid item xs={4} style={{ textAlign: "center" }}>
                        <h3 style={{margin: "5px"}}>Social Media:</h3>
                        <a href="https://www.linkedin.com/in/besonend/" style={{ textDecoration: "none", textAlign: "center", margin: "0", color: "black" }}>LinkedIn</a>
                        <div>
                            <a href="https://github.com/besonend" style={{ textDecoration: "none", textAlign: "center", margin: "0", color: "black" }}>GitHub</a>
                        </div>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "center" }}>
                        <a style={{ textAlign: "center", margin: "0", }}>GitHub</a>
                    </Grid>
                </Grid>
            </footer>
        </>
    );
}

export default Footer;
