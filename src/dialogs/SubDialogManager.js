import React from "react";
import { connect } from "react-redux";


import AvailabilityDialog from "./availability/AvailabilityDialog";
import AddItemDialog from "./item/AddItemDialog";

const dialogLookup = {
  AvailabilityDialog,
  AddItemDialog
};

const mapStateToProps = (state) => ({
  currentDialog: state.dialog.subDialog,
});

const MainDialogManager = ({ currentDialog }) => {
  let renderedDialog;

  if (currentDialog) {
    const { dialogType, dialogProps } = currentDialog;
    const DialogComponent = dialogLookup[dialogType];

    renderedDialog = <DialogComponent {...dialogProps} />;
  }

  return <span>{renderedDialog}</span>;
};

export default connect(mapStateToProps)(MainDialogManager);
