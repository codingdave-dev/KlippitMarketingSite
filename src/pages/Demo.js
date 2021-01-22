import React from "react";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  iFrame: {
    width: "1440px",
    height: "1984px",
    [theme.breakpoints.down("md")]: {
      width: "95%",
    },
  },
}));

const Demo = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid
      container
      alignItems={"center"}
      direction={"column"}
      style={{ marginTop: "6em", marginBottom: "6em" }}
    >
      <Grid item>
        <Typography variant={"h1"}>Self-Guided Product Tour</Typography>
      </Grid>
      <Grid item>
        <Typography variant={"h1"}>For Merchants</Typography>
      </Grid>
      <Grid item style={{marginTop: '1.5em', marginBottom: '4em'}}>
        <Typography variant={"h6"}>
          click on the experience below to begin.
        </Typography>
      </Grid>

      <iframe
        className={classes.iFrame}
        src="https://marvelapp.com/prototype/6g39gb2?emb=1&iosapp=false&frameless=false"
        title={"Demo"}
        allowTransparency="true"
        frameBorder="0"
      ></iframe>

      <Grid item style={{marginTop: '5em'}}>
        <Typography variant={"h6"}>
          Chat with one of out team members to get more info.
        </Typography>
      </Grid>

      <Grid item style={{marginTop: '2em', marginBottom: '4em'}}>
        <Typography variant={"h5"} style={{color: theme.palette.primary.main, cursor: 'pointer'}} onClick={() => {
          window.open(
              `https://calendly.com/chibuike-nwoke/30min`,
              "_blank" // <- This is what makes it open in a new window.
          );
        }}>
          GET MORE INFO
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Demo;
