import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Switch from "@mui/material/Switch"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormGroup from "@mui/material/FormGroup"
import "./App.css"

export default function Feedback() {
  const [open, setOpen] = React.useState(false);
  const [checked, isChecked] = React.useState(false); 

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    isChecked(event.target.checked);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
        color: "white",
        fontFamily: 'Montserrat'
      }}>
Was Shopi Mistaken?      
</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText
                sx={{
                    color: "black",
                    fontFamily: 'Montserrat'
                  }}>
            ShopiDetect can learn from your feedback and improve in the future! Enter the URL and give us your outcome
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="url"
            type="text"
            fullWidth
            variant="outlined"
            inputProps={{style: {fontFamily: "Montserrat" }}} 
            InputLabelProps={{style: {fontFamily: "Montserrat", color: "black"}}}
          />
          

        </DialogContent>
        <DialogActions>
            <FormControlLabel control={<Switch defaultChecked color="default" checked={checked}
            onChange={handleChange} value="checked"
            />} label={<span style={{ fontFamily: "Montserrat" }}> {checked ? "Safe" : "Phishy"}</span>}/>
          <Button onClick={handleClose}
                sx={{
                    color: "black",
                    fontFamily: 'Montserrat'
            }}>Go</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}