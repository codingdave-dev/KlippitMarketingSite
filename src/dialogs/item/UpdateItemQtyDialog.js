import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";

import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import {
  closeDialog,

} from "../../store/actions/dialogActions/dialogActions";
import { connect } from "react-redux";


import TextField from "@material-ui/core/TextField";
import {updateOpportunityItemQty} from "../../store/actions/opportunityActions/opportunityActions";

const useStyles = makeStyles((theme) => ({
  fieldWrapper: {
    paddingTop: "0.3em",
    paddingBottom: "0.3em",
  },
  button: {
    margin: "0.4em",
  },
}));

const actions = {
  closeDialog,
  updateOpportunityItemQty
};

const UpdateItemQtyDialog = ({
  closeDialog,
    updateOpportunityItemQty,
    row,
    jobId
}) => {
  const classes = useStyles();
  // const theme = useTheme();
  // const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [qty, setQty] = useState("");

  useEffect(() => {

      setQty(row.qty)

  }, [setQty, row]);

  const handleChange = (event) => {
    setQty(event.target.value);
  };

  const handleUpdateItem = () => {
    updateOpportunityItemQty(row.id, row.itemId, jobId, qty)

    closeDialog();
  };

  const handleClose = () => {
    closeDialog();
  };
  return (
    <Dialog open={true} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">Update Qty</DialogTitle>
      <DialogContent>
        <form autoComplete={"off"}>
          <Grid item container alignItems={"center"}>
            <Grid item className={classes.fieldWrapper}>
              <TextField
                variant={"outlined"}
                label={"Enter Qty"}
                type={"text"}
                value={qty}
                size={"small"}
                onChange={handleChange}
              />
            </Grid>

            <Grid item>
              <Button
                variant={"outlined"}
                color={"primary"}
                className={classes.button}
                onClick={() => handleUpdateItem()}
              >
                Update
              </Button>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => closeDialog()} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default connect(null, actions)(UpdateItemQtyDialog);
