import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

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
  return (
    <Grid
      container
      alignItems={"center"}
      direction={"column"}
      style={{ marginTop: "6em", marginBottom: "6em" }}
    >
      <iframe
        className={classes.iFrame}
        src="https://marvelapp.com/prototype/6g39gb2?emb=1&iosapp=false&frameless=false"
        title={"Demo"}
        allowTransparency="true"
        frameBorder="0"
      ></iframe>
    </Grid>
  );
};

export default Demo;
