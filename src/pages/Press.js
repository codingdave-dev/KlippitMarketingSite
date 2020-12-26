import React from 'react';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import PressItem from "../ui/PressItem";
import TestimonalCard from "../ui/TestimonalCard";
import BlogItem from "../ui/BlogItem";

const useStyles = makeStyles((theme) => ({
    // ADD STYLES HERE
}));

const Press = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Grid container justify={"center"} direction={"column"}>
            <Grid item style={{marginTop: '4em'}}>
                <Typography variant={"h1"} style={{fontSize: '45px', fontWeight: 400, textAlign: 'center'}}>Press</Typography>
            </Grid>

            <Grid item  >
                <PressItem date={'SEPTEMBER 1, 2020'} title={'Title Goes Here'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ea eius facere facilis fugit iusto, molestias nam non tenetur velit.'}/>
            </Grid>

            <Grid item >
                <PressItem date={'SEPTEMBER 2, 2020'} title={'Title Goes Here'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ea eius facere facilis fugit iusto, molestias nam non tenetur velit.'}/>
            </Grid>


            {/*BLOG*/}
            <Grid
                item
                container
                style={{
                    backgroundColor: "#8AC5CC",
                    paddingTop: "40px",

                }}
                direction={"column"}
            >
                <Grid item style={{marginTop: '4em'}}>
                    <Typography variant={"h1"} style={{fontSize: '45px', fontWeight: 400, textAlign: 'center'}}>Blog</Typography>
                </Grid>

                <Grid item>
                    <BlogItem date={'SEPTEMBER 2, 2020'} title={'Blog Title goes here'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ea eius facere facilis fugit iusto, molestias nam non tenetur velit.'}/>
                </Grid>

                <Grid item>
                    <BlogItem date={'SEPTEMBER 2, 2020'} title={'Blog Title goes here'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ea eius facere facilis fugit iusto, molestias nam non tenetur velit.'}/>
                </Grid>


            </Grid>
        </Grid>
    );
};


export default Press;