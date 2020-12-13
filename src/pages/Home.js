import React from 'react';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import klippitLogo from "../assets/logo/klippitLogo.png";

import squareTiles from '../assets/images/photoSquares.png'
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    heading: {
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.6))'
    }
}));

const Home = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Grid container>
            <Grid item md={6} >
                <Grid item container direction={'column'}>
                    <Grid item>
                        <Typography variant={'h1'} className={classes.heading} >Where everyday influencers</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={'h1'} className={classes.heading} >and local hotspots connect</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={'h1'} className={classes.heading} >and earn together.</Typography>
                    </Grid>

                </Grid>

            </Grid>
            <Grid item md={6} style={{backgroundColor: 'blue'}}>
                <img src={squareTiles} alt="Square Photo Tiles" />
            </Grid>
        </Grid>
    );
};

export default Home;