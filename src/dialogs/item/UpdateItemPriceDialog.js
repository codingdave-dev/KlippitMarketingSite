import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";

import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { closeDialog } from "../../store/actions/dialogActions/dialogActions";
import { connect } from "react-redux";

import TextField from "@material-ui/core/TextField";

import InputAdornment from "@material-ui/core/InputAdornment";
import { updateOpportunityItemPrice } from "../../store/actions/opportunityActions/opportunityActions";

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

  updateOpportunityItemPrice,
};

const UpdateItemQtyDialog = ({
  closeDialog,

  updateOpportunityItemPrice,

  row,
  jobId,
}) => {
  const classes = useStyles();
  // const theme = useTheme();
  // const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [price, setPrice] = useState("");

  useEffect(() => {
    setPrice(row.rentalPrice);
  }, [setPrice, row]);

  const handleChange = (event) => {
    setPrice(event.target.value);
  };

  const handleUpdateItemPrice = () => {
    updateOpportunityItemPrice(row.id, row.itemId, jobId, price);

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
                label={"Enter Price"}
                type={"text"}
                value={price}
                size={"small"}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item>
              <Button
                variant={"outlined"}
                color={"primary"}
                className={classes.button}
                onClick={() => handleUpdateItemPrice()}
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
