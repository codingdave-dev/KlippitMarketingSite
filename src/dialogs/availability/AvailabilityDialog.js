import React from "react";
// import { makeStyles, useTheme } from "@material-ui/core/styles";

// import useMediaQuery from "@material-ui/core/useMediaQuery";
import DialogTitle from "@material-ui/core/DialogTitle";

import Button from "@material-ui/core/Button";

import Dialog from "@material-ui/core/Dialog";
import { connect } from "react-redux";
import {

  closeSubDialog,
} from "../../store/actions/dialogActions/dialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import AvailabilityTable from "../../ui/inventory/AvailabilityTable";
import DialogActions from "@material-ui/core/DialogActions";

// const useStyles = makeStyles((theme) => ({
//   // ADD STYLES HERE
// }));

const actions = {
  closeSubDialog,
};

const AvailabilityDialog = ({ closeSubDialog, row }) => {
  // const classes = useStyles();
  // const theme = useTheme();
  // const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClose = () => {
    closeSubDialog();
  };

  return (
    <Dialog open={true} onClose={handleClose} fullWidth maxWidth={"md"}>
      <DialogTitle id="alert-dialog-title">
        {row?.name} Availability
      </DialogTitle>
      <DialogContent>
        <AvailabilityTable product={row} />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => closeSubDialog()} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default connect(null, actions)(AvailabilityDialog);
