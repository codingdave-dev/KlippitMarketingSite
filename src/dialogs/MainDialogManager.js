import React from "react";
import { connect } from "react-redux";

import ProductPickerDialog from "./productPicker/ProductPickerDialog";
import UpdateItemQtyDialog from "./item/UpdateItemQtyDialog";
import UpdateItemPriceDialog from "./item/UpdateItemPriceDialog";

const dialogLookup = {
  ProductPickerDialog,
  UpdateItemQtyDialog,
  UpdateItemPriceDialog,
};

const mapStateToProps = (state) => ({
  currentDialog: state.dialog.mainDialog,
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
