import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import klippitLogoInverted from "../assets/logo/klippitLogo-inverted.png";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: "118px",
    backgroundColor: "#F1F3F4",
    paddingLeft: "147px",
    paddingRight: "147px",
    [theme.breakpoints.down('md')]: {
      paddingLeft: "2em",
      paddingRight: "2em",
    },
  },

  newsletterContainer: {
    marginLeft: "auto",
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0
    }
  },
  inputContainer: {
    marginLeft: "120px",
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginTop: '1.5em'
    }
  }

}));

const Newsletter = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container className={classes.wrapper} direction={matchesSM ? 'column' : 'row'} alignItems={"center"} >

      {!matchesSM && (
          <Grid item>
            <img src={klippitLogoInverted} alt="Klippit Logo" />
          </Grid>
      )}


      <Grid item className={classes.newsletterContainer} >
        <Typography variant={"subtitle1"} style={{ fontWeight: 700 }}>
          Subscribe to our newsletter
        </Typography>
      </Grid>

      <Grid item className={classes.inputContainer} >
        <Grid item container alignItems={"center"}>
          <Grid item>
            <TextField
              id="email"
              label="name@email.com"
              variant="outlined"
              size={"small"}
            />
          </Grid>
          <Grid item style={{ marginLeft: "5px" }}>
            <Button variant="contained" color={"primary"} size={"medium"}>
              Subscribe
            </Button>
          </Grid>
        </Grid>
      </Grid>

    </Grid>
  );
};

export default Newsletter;
