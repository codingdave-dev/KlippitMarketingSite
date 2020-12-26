import React from 'react';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    // ADD STYLES HERE
}));

const HowKlippitWorksItem = ({value, title, description}) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Grid item container style={{marginBottom: '4em'}}>
            <Grid item md={1}>
                <Grid item>
                    <Typography variant={"h6"} style={{fontSize: '28px', fontWeight: 400, color: theme.palette.common.black, letterSpacing: '4px'}}>{value}</Typography>
                </Grid>
            </Grid>

            <Grid item md={11} >
                <Grid item container direction={'column'} >
                    <Grid item>
                        <Typography variant={"h6"} style={{fontSize: '28px', fontWeight: 'regular', color: theme.palette.common.black, letterSpacing: '4px'}}>{title}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={"h4"} style={{fontSize: '21px', fontWeight: 400, lineHeight: '160%'}}>{description}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default HowKlippitWorksItem;