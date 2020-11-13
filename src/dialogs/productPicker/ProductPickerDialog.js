import React from "react";
// import { makeStyles, useTheme } from "@material-ui/core/styles";

// import useMediaQuery from "@material-ui/core/useMediaQuery";
import DialogTitle from "@material-ui/core/DialogTitle";

import Button from "@material-ui/core/Button";

import Dialog from "@material-ui/core/Dialog";
import { connect } from "react-redux";
import { closeDialog } from "../../store/actions/dialogActions/dialogActions";
import DialogContent from "@material-ui/core/DialogContent";


import DialogActions from "@material-ui/core/DialogActions";
import SubDialogManager from "../SubDialogManager";

import AddOpportunityItemTable from "../../ui/opportunities/AddOpportunityItemTable";

// const useStyles = makeStyles((theme) => ({
//   // ADD STYLES HERE
// }));

const actions = {
  closeDialog,
};

const ProductPickerDialog = ({ closeDialog, id, opportunity, type, inquiry, quote, order }) => {
  // const classes = useStyles();
  // const theme = useTheme();
  // const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClose = () => {
    closeDialog();
  };
  return (
    <Dialog open={true} onClose={handleClose} fullWidth maxWidth={"md"}>
      <DialogTitle id="alert-dialog-title">Product Picker</DialogTitle>
      <DialogContent>
        <AddOpportunityItemTable jobId={id} opportunity={opportunity} type={type} />
        {/*{!inquiry && <AddInquiryItemTable jobId={id} inquiry={inquiry} />}*/}
        {/*{quote && <AddQuoteItemTable jobId={id} quote={quote} />}*/}
        {/*{order && <AddOrderItemTable jobId={id} order={order} />}*/}

        {/*AVAILABILITY DIALOG*/}
        <SubDialogManager />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => closeDialog()} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default connect(null, actions)(ProductPickerDialog);
