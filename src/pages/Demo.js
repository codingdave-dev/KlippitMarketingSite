import React from 'react';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";


const useStyles = makeStyles((theme) => ({
    // ADD STYLES HERE
}));

const Demo = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Grid container alignItems={"center"} direction={"column"} style={{marginTop: '6em', marginBottom: '6em'}}>
            DEMO PAGE iFRAME GOES HERE
        </Grid>
    );
};

export default Demo;