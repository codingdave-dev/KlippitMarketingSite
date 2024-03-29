import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    backgroundColor: "#FFFFFF",
    borderRadius: "16px",
    paddingTop: "33px",
    paddingBottom: "56px",
    paddingLeft: "40px",
    paddingRight: "40px",
    height: '100%',
    [theme.breakpoints.down("md")]: {
      marginTop: "1em",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "10px",
      paddingRight: "10px",
    },
  },
  avatar: {
    height: "90px",
    width: "90px",
  },
}));

const TestimonalCard = ({ image, info, rating, name, type }) => {
  const classes = useStyles();
  return (
    <Grid
      item
      container
      alignItems={"center"}
      direction={"column"}
      className={classes.cardWrapper}
    >
      <Grid item>
        <Avatar src={image} className={classes.avatar} />
      </Grid>
      <Grid item style={{ marginTop: "30px" }}>
        <Typography variant={"h6"} style={{ textAlign: "center" }}>
          {info}
        </Typography>
      </Grid>
      <Grid item style={{ marginTop: "40px" }}>
        <Rating name="rating" value={rating} readOnly />
      </Grid>
      <Grid item style={{ marginTop: "27px" }}>
        <Typography variant={"h4"}>{name}</Typography>
      </Grid>
      <Grid item style={{ marginTop: "22px" }}>
        <Typography variant={"subtitle1"}>{type}</Typography>
      </Grid>
    </Grid>
  );
};

export default TestimonalCard;
