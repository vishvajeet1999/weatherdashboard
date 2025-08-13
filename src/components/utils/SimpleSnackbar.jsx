import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";

export default function SimpleSnackbar({open, handleClose}) {
 

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={3000} // auto close after 3s
        onClose={handleClose}
        message="Internal server error!!"
      />
    </div>
  );
}
