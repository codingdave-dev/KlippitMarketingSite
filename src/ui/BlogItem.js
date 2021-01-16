import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "3em",
    marginBottom: "3em",
    paddingLeft: "10em",
    paddingRight: "10em",
      [theme.breakpoints.down('md')]: {
          paddingLeft: "6em",
          paddingRight: "6em",
      },
      [theme.breakpoints.down('sm')]: {
          paddingLeft: "3em",
          paddingRight: "3em",
      }
  },
    date: {
        fontSize: "21px",
        [theme.breakpoints.down('md')]: {
            fontSize: "18px",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "14px",
        }
    },
    title: {
        fontSize: "28px",
        [theme.breakpoints.down('md')]: {
            fontSize: "25px",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "21px",
        }
    },
    description: {
        fontSize: "21px",
        [theme.breakpoints.down('md')]: {
            fontSize: "18px",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "15px",
        }
    },
    readMoreText: {
        fontSize: "21px",
        color: theme.palette.primary.main,
        cursor: "pointer",
        [theme.breakpoints.down('sm')]: {
            fontSize: "16px",
        }
    },
    arrow: {
        color: theme.palette.primary.main,
        cursor: "pointer",
        [theme.breakpoints.down('sm')]: {
            fontSize: "16px",
        }
    },
}));

const BlogItem = ({ date, title, description, link }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      item
      container
      direction={"column"}
      alignItems={"center"}
      className={classes.container}
    >
      <Grid
        item
        container
        direction={"column"}
        style={{
          backgroundColor: "white",
          padding: "2em",
          borderRadius: "5px",
        }}
      >
        <Grid item>
          <Typography variant={"h6"}  className={classes.date}>
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
                  className={classes.arrow}
                onClick={() => {
                  window.open(
                    `${link}`,
                    "_blank" // <- This is what makes it open in a new window.
                  );
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BlogItem;
