import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";

import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { closeSubDialog } from "../../store/actions/dialogActions/dialogActions";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import TextInput from "../../common/form/TextInput";

import {addOpportunityItem} from "../../store/actions/opportunityActions/opportunityActions";

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
  closeSubDialog,

  addOpportunityItem,


};

const AddItemDialog = ({ closeSubDialog, row, jobId, opportunity, addOpportunityItem, type, handleSubmit, error, submitting }) => {
  const classes = useStyles();
  // const theme = useTheme();
  // const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const handleAddItem = (values) => {
    addOpportunityItem(row, jobId, opportunity, values, type)

    closeSubDialog()
  };

  const handleClose = () => {
    closeSubDialog();
  };
  return (
    <Dialog open={true} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">{row?.name} Qty</DialogTitle>
      <DialogContent>
        <form autoComplete={"off"} onSubmit={handleSubmit(handleAddItem)}>
          <Grid item container alignItems={"center"}>
            <Grid item className={classes.fieldWrapper}>
              <Field
                name={"qty"}
                label={"Enter Qty"}
                component={TextInput}
                type={"text"}
                variant={"outlined"}
              />
            </Grid>

            <Grid item>
              <Button
                variant={"outlined"}
                color={"primary"}
                className={classes.button}
                type={"submit"}
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => closeSubDialog()} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default connect(
  null,
  actions
)(reduxForm({ form: "addItem" })(AddItemDialog));
