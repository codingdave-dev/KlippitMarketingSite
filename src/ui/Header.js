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

import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

// NAV IMAGES
import klippitLogo from '../assets/logo/klippitLogo.png'
import whyKlippit from '../assets/nav/whyKlippit.png'
import demo from '../assets/nav/demo.png'
import press from '../assets/nav/press.png'
import joinButton from '../assets/nav/joinButton.png'




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
    height: '100px',
    paddingLeft: '212px',
    paddingRight: '66px'
  },








  appBar: {
    zIndex: theme.zIndex.modal + 1,
    height: '100px'
  },


  tabs: {
    "& .MuiTabs-indicator": {
      backgroundColor: theme.palette.common.white,
    },
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "20px",
    color: theme.palette.common.white,
    "&:hover": {
      color: theme.palette.common.white,
      opacity: 1,
    },
  },
  drawer: {
    backgroundColor: theme.palette.primary.main,
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "1em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "1em",
    },
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: "0.7",
  },

  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },

  drawerIconContainer: {
    // marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    color: theme.palette.common.white,
    height: "30px",
    width: "30px",
  },



  tabEnd: {
    ...theme.typography.tab,
    marginRight: "25px",
  },
  userContainer: {
    marginRight: "1em",
  },
  userInfoContainer: {
    marginRight: "0.7em",
  },
  userName: {
    color: theme.palette.common.white,
    fontWeight: 600,
  },
  userLocation: {
    // color: theme.palette.common.hyperlink,
  },
}));

const routes = [
    { name: "Home", link: "/", selectedIndex: 0, activeIndex: 0 },
    { name: "Why Klippit", link: "/why_klippit", selectedIndex: 1, activeIndex: 1 },
    { name: "Demo", link: "/demo", selectedIndex: 2, activeIndex: 2 },
    { name: "Press", link: "/press", selectedIndex: 3, activeIndex: 3},
    ];


const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|ipod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [value, setValue] = useState(0);

  const [openDrawer, setOpenDrawer] = useState(false);









  // const handleUserMenuOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleUserMenuClose = () => {
  //   setAnchorEl(null);
  // };
  //
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  // const handleSignOut = () => {
  //   // handleUserMenuClose()
  //   // logout();
  // };

  const tabs = (
      <Fragment>
        <Grid item container alignItems={'center'}>
          <Grid item>
            <img src={klippitLogo} alt="Klippit Logo"/>
          </Grid>
          <Grid item style={{marginLeft: '71px'}}>
            <img src={whyKlippit} alt="Why Klippit"/>
          </Grid>
          <Grid item style={{marginLeft: '60px'}}>
            <img src={demo} alt="Demo"/>
          </Grid>
          <Grid item style={{marginLeft: '60px'}}>
            <img src={press} alt="Press"/>
          </Grid>


        </Grid>
        <Grid item container>
          <Grid item style={{backgroundColor: 'red'}}>
            <img src={joinButton} alt="Join Button" />
          </Grid>
        </Grid>

      </Fragment>


    // <Fragment>
    //
    //
    //
    //
    //   {/*<Tabs value={value} onChange={handleChange} className={classes.tabs}>*/}
    //   {/*  {routes.map((route, index) => (*/}
    //   {/*    <Tab*/}
    //   {/*      key={`${route}${index}`}*/}
    //   {/*      className={classes.tab}*/}
    //   {/*      component={Link}*/}
    //   {/*      to={route.link}*/}
    //   {/*      label={route.name}*/}
    //   {/*    />*/}
    //   {/*  ))}*/}
    //   {/*</Tabs>*/}
    // </Fragment>
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
          {routes.map((route) => (
            <ListItem
              key={`${route}${route.activeIndex}`}
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
              divider
              button
              component={Link}
              to={route.link}
              selected={value === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
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
      <Grid item container alignItems={'center'} className={classes.navBar}>
        <Grid item>
          {tabs}
        </Grid>
      </Grid>
    // <Fragment>
    //   <ElevationScroll>
    //     <AppBar position={"fixed"} className={classes.appBar}>
    //       <Toolbar>
    //
    //         {matches ? drawer : tabs}
    //
    //       </Toolbar>
    //     </AppBar>
    //
    //   </ElevationScroll>
    //   <div className={classes.toolbarMargin} />
    // </Fragment>
  );
};

export default Header;
