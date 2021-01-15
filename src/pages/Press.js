import React from 'react';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import PressItem from "../ui/PressItem";
import BlogItem from "../ui/BlogItem";

import atlantaPodcastImg from '../assets/press/atlantaPodcast.png'
import cohort8Img from '../assets/press/announcingCohart8.png'
import businessRadioImg from '../assets/press/atlantaBusinessRadio.png'

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
                <PressItem img={atlantaPodcastImg} date={'January 1, 2021'} title={'Atlanta Startup Podcast'} description={'Atlanta Startup Podcast interview with our very own Chike Nwoke.'} link={'https://atlantastartuppodcast.com/ep-34-chike-nwoke-founder-klippit/'}/>
            </Grid>

            <Grid item >
                <PressItem img={cohort8Img} date={'December 1, 2020'}  title={'Startup Runway'} description={'Chike Nwoke explaining how Klippit allows influencers to turn their selfies into savings.'} link={'https://startuprunway.org/company/klippit/'}/>
            </Grid>

            <Grid item >
                <PressItem img={businessRadioImg} date={'November 1, 2020'}  title={'Atlanta Business Radio Interview'} description={'Chike Nwoke talking to Atlanta Business Radio X'} link={'https://businessradiox.com/podcast/atlantabusinessradio/klippit/'}/>
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