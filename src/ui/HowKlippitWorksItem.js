import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  value: {
    fontSize: "28px",
    fontWeight: 400,
    color: theme.palette.common.black,
    letterSpacing: "4px",
      [theme.breakpoints.down('md')]: {
        fontSize: '24px'
      }
  },
  title: {
    fontSize: "28px",
    fontWeight: "regular",
    color: theme.palette.common.black,
    letterSpacing: "4px",
      [theme.breakpoints.down('md')]: {
          fontSize: '24px'
      }
  },
  description: {
    fontSize: "21px",
    fontWeight: 400,
    lineHeight: "160%",
      [theme.breakpoints.down('md')]: {
          fontSize: '18px'
      }
  },
    rightContainer: {
        [theme.breakpoints.down('md')]: {
            paddingLeft: '1em'
        }
    }
}));

const HowKlippitWorksItem = ({ value, title, description }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid item container style={{ marginBottom: "4em" }}>
      <Grid item lg={1} md={1} sm={1} xs={1}>
        <Grid item>
          <Typography variant={"h6"} className={classes.value}>
            {value}
          </Typography>
        </Grid>
      </Grid>

      <Grid item lg={11} md={11} sm={11} xs={11} className={classes.rightContainer}>
        <Grid item container direction={"column"}>
          <Grid item>
            <Typography variant={"h6"} className={classes.title}>
              {title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant={"h4"} className={classes.description}>
              {description}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HowKlippitWorksItem;
