import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import image3 from "../assets/whyKlippit/headerImage.png";
import Typography from "@material-ui/core/Typography";
import roundSphere from "../assets/homePage/sphere.png";
import iPhoneMockup from '../assets/whyKlippit/iPhoneMockupWHY.png'
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
  },
  image: {
    // width: '440px'
  },
    iPhone: {
      width: '100%'
    }
}));

const faqLeft = [
    {
        id: 0,
        faq: 'Is there a minimum number of followers a person needs to be considered an influencer?',
        answer: 'Every individual has natural influence - and every small business can benefit from that unique and personal reach in a highly measurable way.'
    },
    {
        id: 1,
        faq: 'How do the influencers know what content to create?',
        answer: 'When you are creating your campaign, you will need to give instructions on what type of content you want influencers to create in order to redeem your offer.'
    },
    {
        id: 2,
        faq: 'How do I get started on our first influencer campaign?',
        answer: 'To get started, click the "join waitlist" button.  You can create your first campaign early.  It will be available when we launch!'
    }
]

const faqRight = [
    {
        id: 0,
        faq: 'How do i recruit influencers for my campaign?',
        answer: "You don't need to recruit influencers for your campaign.  Klippit is designed to do the work for you."
    },
    {
        id: 1,
        faq: 'How much does an influencer campaign cost?',
        answer: 'Unlike other influencer marketing platforms, you will only be charged once people buy from you.  We take a transaction fee whenever someone purchases from your campaign.'
    },
    {
        id: 2,
        faq: 'What should I know about the FTC regulated disclosure laws?',
        answer: 'When the FTC first introduced regulations for influencers, each publication written about a product or company had to feature the hashtags...'
    }
]

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
              <img src={iPhoneMockup} alt="iPhone Layout" className={classes.iPhone}/>
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
                      At Klippit, we believe everyone can be an influencer. We
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant={"h6"}>
                      make it easy for you to find deals at local hotspots, and earn
                  </Typography>
                </Grid>
                  <Grid item>
                      <Typography variant={"h6"}>
                          extra cash just by shopping and sharing!
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
            style={{
                backgroundColor: "#8AC5CC",
                paddingTop: "66px",
                paddingLeft: "140px",
                paddingRight: "140px",
            }}
            direction={"column"}
        >
            <Grid item>
                <Typography variant={"h6"} style={{fontSize: '28px', fontWeight: 'regular', color: theme.palette.common.black, letterSpacing: '4px'}}>HOW KLIPPIT WORKS</Typography>
            </Grid>


            <Grid item style={{marginTop: '40px'}}>
                <Grid item container>
                    <Grid item md={5}>
                        <Typography variant={"h1"}>For Businesses</Typography>
                    </Grid>
                    <Grid item md={7}>
                        <Grid item container direction={'column'}>
                            <Grid item>
                                <HowKlippitWorksItem value={'01'} title={'CREATE CAMPAIGN'} description={'Sign in to create your influencer marketing campaign in just a few clicks! Simply create a name to begin setting up your campaign.'}/>
                            </Grid>
                            <Grid item>
                                <HowKlippitWorksItem value={'02'} title={'DEFINE PROMOTIONS'} description={'Next, decide what savings you’ll be offering to your local influencers and how much they can earn!'}/>
                            </Grid>

                            <Grid item>
                                <HowKlippitWorksItem value={'03'} title={'SET SHARING REQUIREMNETS'} description={'Tell influencers how to share their purchase with friends, and redeem their Klippit Kash.'}/>
                            </Grid>

                            <Grid item>
                                <HowKlippitWorksItem value={'04'} title={'PUBLISH LIVE'} description={'When you’re ready, set the promotion live.'}/>
                            </Grid>

                            <Grid item>
                                <HowKlippitWorksItem value={'05'} title={'START LEARNING'} description={'When customers shop and post their purchases, you both earn! '}/>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


        </Grid>


        {/*FAQ*/}

        <Grid item container direction={'column'} style={{marginTop: '4em', marginBottom: '6em'}}>

            <Grid item>
                <Typography variant={"h1"} style={{fontSize: '45px', fontWeight: 400, textAlign: 'center'}}>Frequently Asked Questions</Typography>
            </Grid>

            <Grid item style={{marginTop: '4em'}}>
                <Grid item container style={{paddingLeft: '4em', paddingRight: '4em'}}>
                    <Grid item md={6}>
                        <Grid item container direction={'column'}>
                            {faqLeft.map(faq => (
                                <FrequentlyAskedQuestionsItem key={faq.id} title={faq.faq} description={faq.answer}/>
                            ))}
                        </Grid>
                    </Grid>

                    <Grid item md={6}>
                        <Grid item container  direction={'column'}>
                            {faqRight.map(faq => (
                                <FrequentlyAskedQuestionsItem key={faq.id} title={faq.faq} description={faq.answer}/>
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
