import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  // ADD STYLES HERE
}));

const Demo = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      container
      alignItems={"center"}
      direction={"column"}
      style={{ marginTop: "6em", marginBottom: "6em" }}
    >
      <iframe
        src="https://marvelapp.com/prototype/6g39gb2?emb=1&iosapp=false&frameless=false"
        width="1440"
        height="1984"
        allowTransparency="true"
        frameBorder="0"
      ></iframe>
    </Grid>
  );
};

export default Demo;
