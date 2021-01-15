import React from 'react';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
    cardWrapper: {
      backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        paddingTop: '33px',
        paddingBottom: '56px',
        paddingLeft: '40px',
        paddingRight: '40px',
        [theme.breakpoints.down('md')]: {
          marginTop: '1em',
        }
    },
    avatar: {
        height: '90px',
        width: '90px'
    }
}));

const TestimonalCard = ({image, info, rating, name, type}) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Grid item container alignItems={'center'} direction={"column"} className={classes.cardWrapper}>
            <Grid item>
                <Avatar src={image} className={classes.avatar}/>
            </Grid>
            <Grid item style={{marginTop: '30px'}}>
                <Typography variant={'h6'} style={{textAlign: 'center'}}>{info}</Typography>
            </Grid>
            <Grid item style={{marginTop: '40px'}}>
                <Rating name="rating" value={rating} readOnly />
            </Grid>
            <Grid item style={{marginTop: '27px'}}>
                <Typography variant={'h4'}>{name}</Typography>
            </Grid>
            <Grid item style={{marginTop: '22px'}}>
                <Typography variant={'subtitle1'}>{type}</Typography>
            </Grid>
        </Grid>
    );
};

export default TestimonalCard;