import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Typography from "@material-ui/core/Typography";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "2.5em",
    marginBottom: "2.5em",
    paddingLeft: "10em",
    paddingRight: "10em",
      [theme.breakpoints.down('md')]: {
        paddingLeft: '4em',
        paddingRight: '4em',
      }
  },
  image: {
    width: "100%",
  },
    date: {
        fontSize: "21px",
        [theme.breakpoints.down('md')]: {
            fontSize: "18px",
        }
    },
    title: {
        fontSize: "28px",
        [theme.breakpoints.down('md')]: {
            fontSize: "25px",
        }
    },
    description: {
        fontSize: "21px",
        [theme.breakpoints.down('md')]: {
            fontSize: "18px",
        }
    },
    leftContainer: {
        paddingRight: "2.5em",
        [theme.breakpoints.down('md')]: {
            paddingRight: "1em",
        }
    },
    rightContainer: {
        paddingLeft: "2.5em",
        [theme.breakpoints.down('md')]: {
            paddingLeft: "1em",
        }
    },
}));

const PressItem = ({ img, date, title, description, link }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid item container alignItems={"center"} className={classes.container}>
      <Grid item lg={4} md={4} sm={8} xs={8} className={classes.leftContainer} >
        <Grid item container>
          <Grid
            item
            style={{ cursor: "pointer" }}
            onClick={() => {
              window.open(
                `${link}`,
                "_blank" // <- This is what makes it open in a new window.
              );
            }}
          >
            <img src={img} alt={`${title} image`} className={classes.image} />
          </Grid>
        </Grid>
      </Grid>

      <Grid item lg={8} md={8} sm={4} xs={4} className={classes.rightContainer} >
        <Grid item container direction={"column"}>
          <Grid item>
            <Typography variant={"h6"} className={classes.date} >
              {date}
            </Typography>
          </Grid>

          <Grid item>
            <Typography variant={"h2"} className={classes.title} >
              {title}
            </Typography>
          </Grid>

          <Grid item style={{ marginTop: "3em" }}>
            <Typography variant={"subtitle1"} className={classes.description}  >
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
                  style={{
                    fontSize: "21px",
                    color: theme.palette.primary.main,
                    cursor: "pointer",
                  }}
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
                  style={{
                    color: theme.palette.primary.main,
                    cursor: "pointer",
                  }}
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
