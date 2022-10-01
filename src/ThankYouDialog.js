import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ThankYouDialog(open) {


  const handleClose = () => {
    open = false
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
                Thank You!
          </DialogContentText>
        </DialogContent>
        <DialogActions> 
          <Button onClick={handleClose} autoFocus>
            You're Welcome!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}