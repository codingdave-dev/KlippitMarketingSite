import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Fade, Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import image3 from "../assets/whyKlippit/headerImage.png";
import Typography from "@material-ui/core/Typography";
import roundSphere from "../assets/homePage/sphere.png";
import iPhoneMockup from "../assets/whyKlippit/iPhoneMockupWHY.png";
import HowKlippitWorksItem from "../ui/HowKlippitWorksItem";
import FrequentlyAskedQuestionsItem from "../ui/FrequentlyAskedQuestionsItem";

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
    [theme.breakpoints.down("md")]: {
      paddingLeft: "5em",
      paddingRight: "5em",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  imageTiles: {
    width: "100%",
  },
  iPhone: {
    width: "100%",
  },
  mainLeftContainer: {
    paddingRight: "4em",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  mainRightContainer: {
    paddingLeft: "4em",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  businessTitle: {
    [theme.breakpoints.down("md")]: {
      fontSize: "36px",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  klippitWorksContainer: {
    backgroundColor: "#8AC5CC",
    paddingTop: "66px",
    paddingLeft: "140px",
    paddingRight: "140px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "90px",
      paddingRight: "90px",
    },
  },
  faqTitle: {
    fontSize: "45px",
    fontWeight: 400,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
  },
  faqContainer: {
    paddingLeft: "4em",
    paddingRight: "4em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "2em",
      paddingRight: "2em",
    },
  },
  image: {
    width: "100%",
  },
  headerText: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
  },
  text: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  },
}));

const howKlippitWorks = [
  {
    id: 0,
    value: "01",
    title: "CREATE CAMPAIGN",
    description:
      "Sign in to create your influencer marketing campaign in just a few clicks! Simply create a name to begin setting up your campaign.",
  },
  {
    id: 1,
    value: "02",
    title: "DEFINE PROMOTIONS",
    description:
      "Next, decide what savings you’ll be offering to your local influencers and how much they can earn!",
  },
  {
    id: 2,
    value: "03",
    title: "SET SHARING REQUIREMNETS",
    description:
      "Tell influencers how to share their purchase with friends, and redeem their Klippit Kash.",
  },
  {
    id: 3,
    value: "04",
    title: "PUBLISH LIVE",
    description: "When you’re ready, set the promotion live.",
  },
  {
    id: 4,
    value: "05",
    title: "START LEARNING",
    description: "When customers shop and post their purchases, you both earn!",
  },
];

const faqLeft = [
  {
    id: 0,
    faq:
      "Is there a minimum number of followers a person needs to be considered an influencer?",
    answer:
      "Every individual has natural influence - and every small business can benefit from that unique and personal reach in a highly measurable way.",
  },
  {
    id: 1,
    faq: "How do the influencers know what content to create?",
    answer:
      "When you are creating your campaign, you will need to give instructions on what type of content you want influencers to create in order to redeem your offer.",
  },
  {
    id: 2,
    faq: "How do I get started on our first influencer campaign?",
    answer:
      'To get started, click the "join waitlist" button.  You can create your first campaign early.  It will be available when we launch!',
  },
];

const faqRight = [
  {
    id: 0,
    faq: "How do i recruit influencers for my campaign?",
    answer:
      "You don't need to recruit influencers for your campaign.  Klippit is designed to do the work for you.",
  },
  {
    id: 1,
    faq: "How much does an influencer campaign cost?",
    answer:
      "Unlike other influencer marketing platforms, you will only be charged once people buy from you.  We take a transaction fee whenever someone purchases from your campaign.",
  },
  {
    id: 2,
    faq: "What should I know about the FTC regulated disclosure laws?",
    answer:
      "When the FTC first introduced regulations for influencers, each publication written about a product or company had to feature the hashtags...",
  },
];

const WhyKlippit = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container direction={"column"}>
      {/*HEADER*/}
      <Grid item container className={classes.container}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
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
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Grid item container justify={"center"}>
            <Grid item>
              <img src={image3} alt="Phone food" className={classes.image} />
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
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Grid
            item
            container
            className={classes.mainLeftContainer}
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
                  <Typography variant={"h2"}>
                    Build Buzz & Grow Your Business
                  </Typography>
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

        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          className={classes.mainRightContainer}
        >
          <Fade in={true} timeout={3000}>
            <img
              src={roundSphere}
              alt="Round Sphere"
              className={classes.imageTiles}
            />
          </Fade>
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
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          className={classes.mainLeftContainer}
        >
          <Grid item container justify={"center"}>
            <Grid item>
              <img
                src={iPhoneMockup}
                alt="iPhone Layout"
                className={classes.iPhone}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          className={classes.mainRightContainer}
        >
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
                  <Typography variant={"h2"} className={classes.headerText}>
                    Put your natural influence to work with Klippit.
                  </Typography>
                </Grid>

                <Grid item style={{ marginTop: "70px" }}>
                  <Typography variant={"h6"} className={classes.text}>
                    At Klippit, we believe everyone can be an influencer. We
                    make it easy for you to find deals at local hotspots, and
                    earn extra cash just by shopping and sharing!
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/*HOW KLIPPIT WORKS*/}
      <Grid
        item
        container
        className={classes.klippitWorksContainer}
        alignItems={matchesSM ? "center" : null}
        direction={"column"}
      >
        <Grid item>
          <Typography
            variant={"h6"}
            style={{
              fontSize: "28px",
              fontWeight: "regular",
              color: theme.palette.common.black,
              letterSpacing: "4px",
            }}
          >
            HOW KLIPPIT WORKS
          </Typography>
        </Grid>

        <Grid item style={{ marginTop: "40px" }}>
          <Grid item container direction={matchesSM ? "column" : "row"}>
            <Grid item lg={5} md={5} sm={12} xs={12}>
              <Typography variant={"h1"} className={classes.businessTitle}>
                For Businesses
              </Typography>
            </Grid>
            <Grid
              item
              lg={7}
              md={7}
              sm={12}
              xs={12}
              style={matchesSM ? { marginTop: "2em" } : null}
            >
              <Grid item container direction={"column"}>
                {howKlippitWorks.map((item) => (
                  <Grid item key={item.id}>
                    <HowKlippitWorksItem
                      value={item.value}
                      title={item.title}
                      description={item.description}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/*FAQ*/}

      <Grid
        item
        container
        direction={"column"}
        style={{ marginTop: "4em", marginBottom: "6em" }}
      >
        <Grid item>
          <Typography variant={"h1"} className={classes.faqTitle}>
            Frequently Asked Questions
          </Typography>
        </Grid>

        <Grid item style={{ marginTop: "4em" }}>
          <Grid item container className={classes.faqContainer}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Grid item container direction={"column"}>
                {faqLeft.map((faq) => (
                  <FrequentlyAskedQuestionsItem
                    key={faq.id}
                    title={faq.faq}
                    description={faq.answer}
                  />
                ))}
              </Grid>
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Grid item container direction={"column"}>
                {faqRight.map((faq) => (
                  <FrequentlyAskedQuestionsItem
                    key={faq.id}
                    title={faq.faq}
                    description={faq.answer}
                  />
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WhyKlippit;
