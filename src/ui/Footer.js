import React, { Fragment, useState } from "react";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

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

import {useHistory} from 'react-router-dom'


// FOOTER IMAGES
import whyKlippit from '../assets/footer/whyKlippit.png'
import examples from '../assets/footer/examples.png'
import theApp from '../assets/footer/theApp.png'
import blog from '../assets/footer/blog.png'
import copyright from '../assets/footer/copyright.png'
import facebook from '../assets/footer/facebook.png'
import linkedin from '../assets/footer/linkedin.png'
import twitter from '../assets/footer/twitter.png'
import instagram from '../assets/footer/instagram.png'




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
    height: '82px',
    paddingLeft: '147px',
    paddingRight: '147px'
  },

  footerLink: {
    marginLeft: '60px',
    cursor: 'pointer'
  },








  // appBar: {
  //   zIndex: theme.zIndex.modal + 1,
  //   backgroundColor: theme.palette.primary.main,
  //   height: '100px',
  //   paddingLeft: '212px',
  //   paddingRight: '66px',
  //   alignsItems: 'center'
  // },


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
    { name: "Why Klippit", link: "/why_klippit", selectedIndex: 0, activeIndex: 0 },
    { name: "Examples", link: "/examples", selectedIndex: 1, activeIndex: 1 },
    { name: "The App", link: "/theApp", selectedIndex: 2, activeIndex: 2 },
    { name: "Blog", link: "/blog", selectedIndex: 3, activeIndex: 3},
    ];


const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|ipod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [value, setValue] = useState(0);

  const [openDrawer, setOpenDrawer] = useState(false);

  const history = useHistory()









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


      <Grid item container alignItems={'center'} >
        <Grid item  style={{cursor: 'pointer'}}>
          <img src={whyKlippit} alt="Why Klippit" onClick={() => history.push('/whyKlippit')}/>
        </Grid>
        <Grid item   className={classes.footerLink}>
          <img src={examples} alt="Examples" onClick={() => history.push('/examples')}/>
        </Grid>
        <Grid item  className={classes.footerLink}>
          <img src={theApp} alt="The App" onClick={() => history.push('/theApp')}/>
        </Grid>
        <Grid item  className={classes.footerLink}>
          <img src={blog} alt="Blog" onClick={() => history.push('/blog')}/>
        </Grid>

        <Grid item  style={{marginLeft: 'auto'}}>
          <img src={copyright} alt="Copyright"/>
        </Grid>

        <Grid item  style={{marginLeft: '40px'}}>
            <a href="https://www.facebook.com/klippitapp" target={'_blank'}><img src={facebook} alt="Facebook"/></a>
        </Grid>
          <Grid item  style={{marginLeft: '40px'}}>
              <a href="https://www.linkedin.com/company/klippit-ltd-company" target={'_blank'}><img src={linkedin} alt="Linkedin"/></a>
          </Grid>
          <Grid item  style={{marginLeft: '40px'}}>
              <a href="https://twitter.com/OfficialKlippit" target={'_blank'}><img src={twitter} alt="Twitter"/></a>
          </Grid>
          <Grid item  style={{marginLeft: '40px'}}>
              <a href="https://www.instagram.com/klippitcash/" target={'_blank'}><img src={instagram} alt="Instagram"/></a>
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
          {routes.map((route) => (
            <ListItem
              key={`${route}${route.activeIndex}`}
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
              divider
              button
              // component={Link}
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
        {tabs}
        {/*<Grid item>*/}
        {/*  */}
        {/*</Grid>*/}
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
    //   {/*<div className={classes.toolbarMargin} />*/}
    // </Fragment>
  );
};

export default Header;
