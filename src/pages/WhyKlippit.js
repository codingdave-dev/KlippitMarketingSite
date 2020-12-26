import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import image3 from "../assets/whyKlippit/headerImage.png";
import Typography from "@material-ui/core/Typography";
import roundSphere from "../assets/homePage/sphere.png";
import iPhoneBody from "../assets/homePage/iPhoneBody.png";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#DEE0DD",
  },
  heading: {
    fontSize: "45px",
  },
  textContainer: {
    paddingTop: "10em",
    paddingBottom: "10em",
    paddingLeft: "12em",
    paddingRight: "12em",
  },
  image: {
    // width: '440px'
  },
}));

const WhyKlippit = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container direction={"column"}>
      {/*HEADER*/}
      <Grid item container className={classes.container}>
        <Grid item md={6}>
          <Grid item container className={classes.textContainer}>
            <Grid item>
              <Grid item container direction={"column"}>
                <Grid item>
                  <Typography variant={"h1"} className={classes.heading}>
                    Why & How to Use Klippit
                  </Typography>
                </Grid>
                <Grid item style={{ marginTop: "42px" }}>
                  <Typography variant={"h3"}>
                    Every individual has natural influence – and every small
                    business can benefit from that unique, personal reach in a
                    highly measurable way. Klippit makes it easy for everyday
                    influencers and local hotspots to connect and earn together!
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>{" "}
        <Grid item md={6}>
          <Grid item container justify={"center"}>
            <Grid item>
              <img
                src={image3}
                alt="Phone food Image"
                className={classes.image}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/*SPHERE*/}
      <Grid
        item
        container
        style={{ paddingTop: "60px", paddingBottom: "60px" }}
      >
        <Grid item md={6}>
          <Grid
            item
            container
            style={{ paddingLeft: "12em", paddingRight: "12em" }}
            direction={"column"}
          >
            <Grid item>
              <Grid item container direction={"column"}>
                <Grid item>
                  <Typography
                    variant={"h6"}
                    style={{ color: theme.palette.primary.main }}
                  >
                    FOR BUSINESSES
                  </Typography>
                </Grid>

                <Grid item style={{ marginTop: "53px" }}>
                  <Typography variant={"h2"}>Build Buzz & Grow</Typography>
                </Grid>

                <Grid item>
                  <Typography variant={"h2"}>Your Business</Typography>
                </Grid>

                <Grid item style={{ marginTop: "70px" }}>
                  <Typography variant={"h6"}>
                    Create affordable influencer marketing campaigns with
                    exclusive offers for local influencers in just minutes. They
                    shop, you earn.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={6} style={{ paddingLeft: "4em" }}>
          <img src={roundSphere} alt="Round Sphere" />
        </Grid>
      </Grid>

      {/*IPHONE*/}
      <Grid
        item
        container
        style={{
          paddingTop: "60px",
          paddingBottom: "60px",
          backgroundColor: "#F1F3F4",
        }}
      >
        <Grid item md={6} style={{ paddingRight: "4em" }}>
          <Grid item container justify={"center"}>
            <Grid item>
              <img src={iPhoneBody} alt="iPhone Layout" />
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={6} style={{ paddingLeft: "4em" }}>
          <Grid item container direction={"column"}>
            <Grid item>
              <Grid item container direction={"column"}>
                <Grid item>
                  <Typography
                    variant={"h6"}
                    style={{ color: theme.palette.primary.main }}
                  >
                    FOR INDIVIDUALS
                  </Typography>
                </Grid>

                <Grid item style={{ marginTop: "53px" }}>
                  <Typography variant={"h2"}>
                    Put your natural influence to
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography variant={"h2"}>work with Klippit.</Typography>
                </Grid>

                <Grid item style={{ marginTop: "70px" }}>
                  <Typography variant={"h6"}>
                    With Klippit, everyone can use their natural influence to
                    support
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant={"h6"}>
                    local businesses - and earn cash!
                  </Typography>
                </Grid>

                <Grid item style={{ marginTop: "46px" }}>
                  <Typography variant={"h6"}>
                    &bull; Join to see exclusive specials from local businesses.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant={"h6"}>
                    &bull; Earn money when you shop and share your photos.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant={"h6"}>
                    &bull; When your friends shop, you earn even more!
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WhyKlippit;
