import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "3em",
    marginBottom: "3em",
    paddingLeft: "10em",
    paddingRight: "10em",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "6em",
      paddingRight: "6em",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "3em",
      paddingRight: "3em",
    },
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
  subTitle: {
    fontWeight: 700,
    fontSize: "22px",
    [theme.breakpoints.down("md")]: {
      fontSize: "19px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
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
}));

const BlogItem = ({ date, title, item }) => {
  const [showBlog, setShowBlog] = useState(false);

  const classes = useStyles();
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
          <Typography variant={"h6"} className={classes.date}>
            {date}
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant={"h2"} className={classes.title}>
            {title}
          </Typography>
        </Grid>

        {showBlog && (
          <Grid item style={{ marginTop: "3em" }}>
            <Grid item container>
              {item.images?.map((image) => (
                <Grid item key={image.id} style={{ padding: "1.5em" }}>
                  <img
                    src={image.source}
                    alt={image.name}
                    style={{ width: `${image.width}`, borderRadius: "5px" }}
                  />
                </Grid>
              ))}
            </Grid>

            {item.descriptions?.map((item) => (
              <Grid key={item.id} item container direction={"column"}>
                {item.header && (
                  <Grid item style={{ marginTop: "2em" }}>
                    <Typography variant={"h2"} className={classes.title}>
                      {item.header}
                    </Typography>
                  </Grid>
                )}
                {item.title && (
                  <Grid item style={{ marginTop: "2em" }}>
                    <Typography
                      variant={"subtitle1"}
                      className={classes.subTitle}
                    >
                      {item.title}
                    </Typography>
                  </Grid>
                )}
                <Grid item style={{ marginTop: "1.5em" }}>
                  <Typography
                    variant={"subtitle1"}
                    className={classes.description}
                  >
                    {item.text}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>
        )}

        <Grid item style={{ marginTop: "3em" }}>
          <Grid item container alignItems={"center"}>
            <Grid item>
              <Typography
                variant={"h2"}
                onClick={() => setShowBlog(!showBlog)}
                className={classes.readMoreText}
              >
                {showBlog ? "READ LESS" : "READ MORE"}
              </Typography>
            </Grid>
            <Grid item style={{ marginLeft: "10px" }}>
              <ArrowForwardIosIcon
                className={classes.arrow}
                onClick={() => setShowBlog(!showBlog)}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BlogItem;
