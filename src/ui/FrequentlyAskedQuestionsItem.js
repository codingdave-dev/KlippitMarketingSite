import React from 'react';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    // ADD STYLES HERE
}));

const FrequentlyAskedQuestionsItem = ({title, description}) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Grid item style={{marginTop: '2em', marginBottom: '2em', paddingLeft: '2.5em', paddingRight: '2.5em'}}>
            <Grid item container direction={'column'}>
                <Grid item>
                    <Typography variant={'h2'} style={{fontSize: '24px'}}>{title}</Typography>
                </Grid>

                <Grid item style={{marginTop: '1.5em'}}>
                    <Typography variant={'h3'}>{description}</Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default FrequentlyAskedQuestionsItem;