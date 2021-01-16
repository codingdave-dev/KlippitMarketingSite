import React, { Fragment } from "react";

import { makeStyles } from "@material-ui/styles";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

import { useHistory } from "react-router-dom";

// FOOTER IMAGES
import whyKlippit from "../assets/footer/whyKlippit.png";
import examples from "../assets/footer/examples.png";
import theApp from "../assets/footer/theApp.png";
import blog from "../assets/footer/blog.png";
import copyright from "../assets/footer/copyright.png";
import facebook from "../assets/footer/facebook.png";
import linkedin from "../assets/footer/linkedin.png";
import twitter from "../assets/footer/twitter.png";
import instagram from "../assets/footer/instagram.png";

const useStyles = makeStyles((theme) => ({
  navBar: {
    backgroundColor: theme.palette.primary.main,
    height: "82px",
    paddingLeft: "147px",
    paddingRight: "147px",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },

  footerLink: {
    marginLeft: "60px",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      marginLeft: "50px",
    },
  },
  socialIconWrapper: {
    marginLeft: "40px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "30px",
    },
  },
  socialIcon: {
    [theme.breakpoints.down("sm")]: {
      width: "28px",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const history = useHistory();

  const tabs = (
    <Grid item container alignItems={"center"}>
      {!matchesSM && (
        <Fragment>
          <Grid item style={{ cursor: "pointer" }}>
            <img
              src={whyKlippit}
              alt="Why Klippit"
              onClick={() => history.push("/whyKlippit")}
            />
          </Grid>
          <Grid item className={classes.footerLink}>
            <img
              src={examples}
              alt="Examples"
              onClick={() => history.push("/examples")}
            />
          </Grid>
          <Grid item className={classes.footerLink}>
            <img
              src={theApp}
              alt="The App"
              onClick={() => history.push("/theApp")}
            />
          </Grid>
          <Grid item className={classes.footerLink}>
            <img src={blog} alt="Blog" onClick={() => history.push("/blog")} />
          </Grid>
        </Fragment>
      )}

      <Grid item style={matchesSM ? null : { marginLeft: "auto" }}>
        <img src={copyright} alt="Copyright" />
      </Grid>

      <Grid
        item
        style={matchesSM ? { marginLeft: "auto" } : { marginLeft: "40px" }}
      >
        <a
          href="https://www.facebook.com/klippitapp"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="Facebook" className={classes.socialIcon} />
        </a>
      </Grid>
      <Grid item className={classes.socialIconWrapper}>
        <a
          href="https://www.linkedin.com/company/klippit-ltd-company"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="Linkedin" className={classes.socialIcon} />
        </a>
      </Grid>
      <Grid item className={classes.socialIconWrapper}>
        <a
          href="https://twitter.com/OfficialKlippit"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="Twitter" className={classes.socialIcon} />
        </a>
      </Grid>
      <Grid item className={classes.socialIconWrapper}>
        <a
          href="https://www.instagram.com/klippitcash/"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="Instagram" className={classes.socialIcon} />
        </a>
      </Grid>
    </Grid>
  );

  return (
    <Grid item container alignItems={"center"} className={classes.navBar}>
      {tabs}
    </Grid>
  );
};

export default Header;
