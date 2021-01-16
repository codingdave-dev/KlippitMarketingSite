import React from "react";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const FrequentlyAskedQuestionsItem = ({ title, description }) => {
  return (
    <Grid
      item
      style={{
        marginTop: "2em",
        marginBottom: "2em",
        paddingLeft: "2.5em",
        paddingRight: "2.5em",
      }}
    >
      <Grid item container direction={"column"}>
        <Grid item>
          <Typography variant={"h2"} style={{ fontSize: "24px" }}>
            {title}
          </Typography>
        </Grid>

        <Grid item style={{ marginTop: "1.5em" }}>
          <Typography variant={"h3"}>{description}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FrequentlyAskedQuestionsItem;
