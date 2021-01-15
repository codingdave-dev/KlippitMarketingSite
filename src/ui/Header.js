import React, { Fragment, useState } from "react";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/styles";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Grid from "@material-ui/core/Grid";

import { useHistory } from "react-router-dom";

// NAV IMAGES
import klippitLogo from "../assets/logo/klippitLogo.png";
import whyKlippit from "../assets/nav/whyKlippit.png";
import demo from "../assets/nav/demo.png";
import press from "../assets/nav/press.png";
import joinButton from "../assets/nav/joinButton.png";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  navBar: {
    backgroundColor: theme.palette.primary.main,
    height: "100px",
    paddingLeft: "212px",
    paddingRight: "66px",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "100px",
      paddingRight: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },

  navLogo: {
    marginRight: "10px",
    cursor: "pointer",
  },
  navLink: {
    marginLeft: "60px",
    cursor: "pointer",
  },
  navButton: {
    marginLeft: "auto",
    cursor: "pointer",
  },

  logo: {},
  linkImg: {},
  button: {},

  drawer: {
    backgroundColor: theme.palette.primary.main,
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1,
    backgroundColor: theme.palette.primary.main,
  },

  //
  // tabs: {
  //   "& .MuiTabs-indicator": {
  //     backgroundColor: theme.palette.common.white,
  //   },
  // },
  // tab: {
  //   ...theme.typography.tab,
  //   minWidth: 10,
  //   marginLeft: "20px",
  //   color: theme.palette.common.white,
  //   "&:hover": {
  //     color: theme.palette.common.white,
  //     opacity: 1,
  //   },
  // },

  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "1em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "1em",
    },
  },

  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    color: theme.palette.common.white,
    height: "30px",
    width: "30px",
  },
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|ipod/.test(navigator.userAgent);
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [openDrawer, setOpenDrawer] = useState(false);

  const history = useHistory();

  const tabs = (
    <Grid
      item
      container
      direction={matchesSM ? "column" : "row"}
      alignItems={"center"}
    >
      <Grid item className={classes.navLogo}>
        <img
          src={klippitLogo}
          alt="Klippit Logo"
          onClick={() => history.push("/")}
          className={classes.logo}
        />
      </Grid>
      <Grid item className={classes.navLink}>
        <img
          src={whyKlippit}
          alt="Why Klippit"
          onClick={() => history.push("/whyKlippit")}
          className={classes.linkImg}
        />
      </Grid>
      <Grid item className={classes.navLink}>
        <img
          src={demo}
          alt="Demo"
          onClick={() => history.push("/demo")}
          className={classes.linkImg}
        />
      </Grid>
      <Grid item className={classes.navLink}>
        <img
          src={press}
          alt="Press"
          onClick={() => history.push("/press")}
          className={classes.linkImg}
        />
      </Grid>
      <Grid item className={classes.navButton}>
        <img
          src={joinButton}
          alt="Join Button"
          onClick={() => history.push("/join")}
          className={classes.button}
        />
      </Grid>
    </Grid>
  );

  const drawer = (
    <Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          <ListItem>
            <img
              src={whyKlippit}
              alt="Why Klippit"
              onClick={() => {
                history.push("/whyKlippit");
                setOpenDrawer(false)
              }}
              className={classes.linkImg}
            />
          </ListItem>
          <ListItem>
            <img
                src={demo}
                alt="Demo"
                onClick={() => {
                  history.push("/demo");
                  setOpenDrawer(false)
                }}
                className={classes.linkImg}
            />
          </ListItem>
          <ListItem>
            <img
                src={press}
                alt="Press"
                onClick={() => {
                  history.push("/press");
                  setOpenDrawer(false)
                }}
                className={classes.linkImg}
            />
          </ListItem>
          <ListItem>
            <img
                src={joinButton}
                alt="Join Button"
                onClick={() => {
                  history.push("/join"); setOpenDrawer(false)
                }}
                className={classes.button}
            />
          </ListItem>
        </List>
      </SwipeableDrawer>

      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
        className={classes.drawerIconContainer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </Fragment>
  );

  return (
    <Fragment>
      {!matchesSM && (
        <Grid item container alignItems={"center"} className={classes.navBar}>
          {tabs}
        </Grid>
      )}

      {matchesSM && (
        <Fragment>
          <ElevationScroll>
            <AppBar position={"fixed"} className={classes.appBar}>
              <Toolbar>
                <img
                  src={klippitLogo}
                  alt="Klippit Logo"
                  onClick={() => history.push("/")}
                  className={classes.logo}
                />
                {drawer}
              </Toolbar>
            </AppBar>
          </ElevationScroll>
          <div className={classes.toolbarMargin} />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Header;
