import React from "react";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import Typography from "@material-ui/core/Typography";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import useMediaQuery from "@material-ui/core/useMediaQuery";
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "2.5em",
    marginBottom: "2.5em",
    paddingLeft: "10em",
    paddingRight: "10em",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "4em",
      paddingRight: "4em",
    },
  },
  image: {
    width: "100%",
  },
  date: {
    fontSize: "21px",
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
  title: {
    fontSize: "28px",
    [theme.breakpoints.down("md")]: {
      fontSize: "25px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "21px",
    },
  },
  description: {
    fontSize: "21px",
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
  },
  readMoreText: {
    fontSize: "21px",
    color: theme.palette.primary.main,
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  },
  arrow: {
    color: theme.palette.primary.main,
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  },
  leftContainer: {
    paddingRight: "2.5em",
    [theme.breakpoints.down("md")]: {
      paddingRight: "1em",
    },
  },
  rightContainer: {
    paddingLeft: "2.5em",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "1em",
    },
  },
}));

const PressItem = ({ img, date, title, description, link }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Grid item container alignItems={"center"} className={classes.container}>
      {!matchesXS && (
          <Grid item lg={4} md={4} sm={5} xs={8} className={classes.leftContainer}>
            <Grid item container>
              <Grid
                  item
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    window.open(`${link}`, "_blank");
                  }}
              >
                <img src={img} alt={`${title}`} className={classes.image} />
              </Grid>
            </Grid>
          </Grid>
      )}


      <Grid item lg={8} md={8} sm={7} xs={12} className={classes.rightContainer}>
        <Grid item container direction={"column"}>
          <Grid item>
            <Typography variant={"h6"} className={classes.date}>
              {date}
            </Typography>
          </Grid>

          <Grid item>
            <Typography variant={"h2"} className={classes.title}>
              {title}
            </Typography>
          </Grid>

          <Grid item style={{ marginTop: "3em" }}>
            <Typography variant={"subtitle1"} className={classes.description}>
              {description}
            </Typography>
          </Grid>

          <Grid item style={{ marginTop: "3em" }}>
            <Grid item container alignItems={"center"}>
              <Grid item>
                <Typography
                  variant={"h2"}
                  onClick={() => {
                    window.open(
                      `${link}`,
                      "_blank" // <- This is what makes it open in a new window.
                    );
                  }}
                  className={classes.readMoreText}
                >
                  READ MORE
                </Typography>
              </Grid>
              <Grid item style={{ marginLeft: "10px" }}>
                <ArrowForwardIosIcon
                  onClick={() => {
                    window.open(
                      `${link}`,
                      "_blank" // <- This is what makes it open in a new window.
                    );
                  }}
                  className={classes.arrow}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PressItem;
