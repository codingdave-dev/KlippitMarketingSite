import React from 'react';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  // STYLES HERE
}));


const App = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container>

    </Grid>
  );
}

export default App;
