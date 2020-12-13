import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import squareTiles from "../assets/homePage/photoSquares.png";
import mainButton from "../assets/homePage/main_button.png";
import roundSphere from "../assets/homePage/sphere.png";
import iPhoneBody from "../assets/homePage/iPhoneBody.png";

// TESTIMONAL IMAGES
import card1Image from "../assets/homePage/testimonals/card1.png";
import card2Image from "../assets/homePage/testimonals/card2.png";
import card3Image from "../assets/homePage/testimonals/card3.png";

import Typography from "@material-ui/core/Typography";
import TestimonalCard from "../ui/TestimonalCard";

const useStyles = makeStyles((theme) => ({
  heading: {
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.6))",
  },
  subHeading: {
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.6))",
  },
}));

const testimonals = [
  {
    id: 0,
    image: card1Image,
    info:
      "Um volo blaces ilicias asit evenest, acestem dolest, ipsum et occullab in provitiusa vendignimi.",
    rating: 4,
    name: "Kyle Jones",
    type: "Influencer",
  },
  {
    id: 1,
    image: card2Image,
    info:
      "Um volo blaces ilicias asit evenest, acestem dolest, ipsum et occullab in provitiusa vendignimi.",
    rating: 4,
    name: "Evan Cooper",
    type: "Influencer",
  },
  {
    id: 2,
    image: card3Image,
    info:
      "Um volo blaces ilicias asit evenest, acestem dolest, ipsum et occullab in provitiusa vendignimi.",
    rating: 4,
    name: "Eduardo Watson",
    type: "Influencer",
  },
];

const Home = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container alignItems={"center"} direction={"column"}>
      {/*PHOTO TILES*/}
      <Grid
        item
        container
        style={{ paddingTop: "132px", paddingBottom: "106px" }}
      >
        <Grid item md={6} style={{ paddingRight: "4em" }}>
          <Grid item container alignItems={"flex-end"} direction={"column"}>
            <Grid item>
              <Grid item container direction={"column"}>
                <Grid item>
                  <Typography variant={"h1"} className={classes.heading}>
                    Where everyday influencers
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant={"h1"} className={classes.heading}>
                    and local hotspots connect
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant={"h1"} className={classes.heading}>
                    and earn together.
                  </Typography>
                </Grid>

                <Grid item style={{ marginTop: "42px" }}>
                  <Typography variant={"h3"} className={classes.subHeading}>
                    Every individual has natural influence – and both people
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant={"h3"} className={classes.subHeading}>
                    and small businesses can benefit! With Klippit, companies
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant={"h3"} className={classes.subHeading}>
                    can easily create influencer marketing campaigns, and
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant={"h3"} className={classes.subHeading}>
                    individuals make money when they shop and share.
                  </Typography>
                </Grid>

                <Grid item style={{ marginTop: "60px" }}>
                  <img src={mainButton} alt="Get Started Here" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6} style={{ paddingLeft: "4em" }}>
          <img src={squareTiles} alt="Square Photo Tiles" />
        </Grid>
      </Grid>

      {/*TESTIMONALS*/}
      <Grid
        item
        container
        style={{
          backgroundColor: "#8AC5CC",
          paddingTop: "66px",
          paddingLeft: "140px",
          paddingRight: "140px",
        }}
        direction={"column"}
        alignItems={"center"}
      >
        <Grid item>
          <Typography variant={"h1"}>Testimonals</Typography>
        </Grid>

        <Grid item style={{ marginTop: "66px", paddingBottom: "82px" }}>
          <Grid item container justify={"center"}>
            {testimonals.map((card) => (
              <Grid
                key={card.id}
                item
                md={4}
                style={{ paddingLeft: "5px", paddingRight: "5px" }}
              >
                <TestimonalCard
                  image={card.image}
                  info={card.info}
                  rating={card.rating}
                  name={card.name}
                  type={card.type}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/*SPHERE*/}
      <Grid
        item
        container
        style={{ paddingTop: "60px", paddingBottom: "60px" }}
      >
        <Grid item md={6} style={{ paddingRight: "4em" }}>
          <Grid item container alignItems={"flex-end"} direction={"column"}>
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
                  <Typography variant={"h2"}>
                    Connect with your local
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography variant={"h2"}>
                    community to scale at speed
                  </Typography>
                </Grid>

                <Grid item style={{ marginTop: "70px" }}>
                  <Typography variant={"h6"}>
                    Klippit connects businesses with local influencers to fuel
                    your
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant={"h6"}>growth. Here’s how:</Typography>
                </Grid>

                <Grid item style={{ marginTop: "46px" }}>
                  <Typography variant={"h6"}>
                    &bull; Easily create affordable influencer marketing
                    campaigns.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant={"h6"}>
                    &bull; Local influencers earn when they buy and share.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant={"h6"}>
                    &bull; Build buzz and brand awareness.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant={"h6"}>
                    &bull; Only spend when you earn!
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

      {/*FOR INDIVIDUALS*/}
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
          <Grid item container justify={"flex-end"}>
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

export default Home;
