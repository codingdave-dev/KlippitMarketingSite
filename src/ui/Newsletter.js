import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Snackbar } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import klippitLogoInverted from "../assets/logo/klippitLogo-inverted.png";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import emailjs from "emailjs-com";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: "118px",
    backgroundColor: "#F1F3F4",
    paddingLeft: "147px",
    paddingRight: "147px",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "2em",
      paddingRight: "2em",
    },
  },

  newsletterContainer: {
    marginLeft: "auto",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  inputContainer: {
    marginLeft: "120px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginTop: "1.5em",
    },
  },
}));

const Newsletter = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [showSnackbar, setShowSnackbar] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleClose = () => {
    setShowSnackbar(false);
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    setSubmitting(true);

    emailjs
      .sendForm(
        "service_p3jhxth",
        "template_c9jfpja",
        e.target,
        "user_9kwgXPTXfJBBQ0qX8byRw"
      )
      .then(
        (result) => {
          setShowSnackbar(true);
          setEmailAddress("");
          setSubmitting(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Grid
      container
      className={classes.wrapper}
      direction={matchesSM ? "column" : "row"}
      alignItems={"center"}
    >
      <Snackbar
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} variant={"filled"} severity="success">
          Newsletter request sent!
        </Alert>
      </Snackbar>

      {!matchesSM && (
        <Grid item>
          <img src={klippitLogoInverted} alt="Klippit Logo" />
        </Grid>
      )}

      <Grid item className={classes.newsletterContainer}>
        <Typography variant={"subtitle1"} style={{ fontWeight: 700 }}>
          Subscribe to our newsletter
        </Typography>
      </Grid>

      <Grid item className={classes.inputContainer}>
        <form onSubmit={handleSendEmail}>
          <Grid item container alignItems={"center"}>
            <Grid item>
              <TextField
                id="email"
                name={"email"}
                label="name@email.com"
                variant="outlined"
                size={"small"}
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
              />
            </Grid>
            <Grid item style={{ marginLeft: "5px" }}>
              <Button
                variant="contained"
                color={"primary"}
                size={"medium"}
                type={"submit"}
                disabled={submitting}
              >
                Subscribe
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default Newsletter;
