import React from 'react';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import placeholder from '../assets/press/pressItemPlaceholder.png'
import Typography from "@material-ui/core/Typography";

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
const useStyles = makeStyles((theme) => ({
    // ADD STYLES HERE
}));

const PressItem = ({img, date, title, description, link}) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Grid item container style={{marginTop: '2.5em', marginBottom: '2.5em', paddingLeft: '10em', paddingRight: '10em',}}>
            <Grid item md={6} style={{paddingRight: '2.5em'}}>
                <Grid item container >
                    <Grid item>
                        <img src={placeholder} alt={`${title} image`}/>
                    </Grid>
                </Grid>

            </Grid>

            <Grid item md={6} style={{paddingLeft: '2.5em'}}>
                <Grid item container direction={'column'}>
                    <Grid item>
                        <Typography variant={'h6'} style={{fontSize: '21px'}}>{date}</Typography>
                    </Grid>

                    <Grid item>
                        <Typography variant={'h2'} style={{fontSize: '28px'}}>{title}</Typography>
                    </Grid>

                    <Grid item style={{marginTop: '3em'}}>
                        <Typography variant={'subtitle1'} style={{fontSize: '21px'}}>{description}</Typography>
                    </Grid>

                    <Grid item style={{marginTop: '3em'}}>
                        <Grid item container alignItems={'center'} >
                            <Grid item>
                                <Typography variant={'h2'} onClick={() => console.log('READ MORE TEXT')} style={{fontSize: '21px', color: theme.palette.primary.main, cursor: 'pointer'}}>READ MORE</Typography>
                            </Grid>
                            <Grid item style={{marginLeft: '10px'}}>
                                <ArrowForwardIosIcon onClick={() => console.log('READ MORE TEXT')} style={{color: theme.palette.primary.main, cursor: 'pointer'}}/>
                            </Grid>
                        </Grid>


                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default PressItem;