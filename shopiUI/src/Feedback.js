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


const SERVER_URL = process.env.REACT_APP_API_URI;

export default function Feedback() {
  const [open, setOpen] = React.useState(false);
  const [checked, isChecked] = React.useState(false);
  const [feedbackUrl, setFeedbackUrl] = React.useState("");
  const [ThankYou,setThankYou] = React.useState(false);
 

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleInputChange = (event) => {
    setFeedbackUrl(event.target.value);
  };
  const handleChange = (event) => {
    isChecked(event.target.checked);
  };
  const handleClose = () => {
    setOpen(false);
    setThankYou(false);
    
  }

  const handleCancel = () => {
    setOpen(false);
 
  }


function handleCheck(checked){
    if(checked===true){return 0}
    return 1
}

  async function handleSubmit(event){
    var bodyJSON = {url: feedbackUrl,
    feedback: handleCheck(checked)}
    const response = await fetch(`${SERVER_URL}/feedback`, {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyJSON)
       
    })
    const output = await response.json();
    
    setThankYou(true);


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
            value={feedbackUrl}
            onChange={handleInputChange}
          />
          

        </DialogContent>
        <DialogActions>
            
            <FormControlLabel control={<Switch defaultChecked color="default" checked={checked}
            onChange={handleChange} value="checked"
            />} label={<span style={{ fontFamily: "Montserrat" }}> {checked ? "Safe" : "Phishy"}</span>}/>
            <Button onClick={handleCancel}
                sx={{
                    color: "black",
                    fontFamily: 'Montserrat'
            }}>Cancel</Button>
          
          
          <Button onClick={handleSubmit}
                sx={{
                    color: "black",
                    fontFamily: 'Montserrat'
            }}>Go</Button>


        </DialogActions>
      </Dialog>
      {
        ThankYou===true &&
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >

        <DialogContent>
          <DialogContentText id="alert-dialog-description"         
          sx={{
                    color: "black",
                    fontFamily: 'Montserrat'
            }}
          >
                <h1>Thank You!</h1> Your feedback is extremely helpful, Shopi will make sure
                to not be mistaken in the near future. Check out how Shopi learns in the "How does it work" section (top right corner)
          </DialogContentText>
        </DialogContent>
        <DialogActions> 
          <Button onClick={handleClose} autoFocus
            sx={{
                        color: "black",
                        fontFamily: 'Montserrat'
                }}>
            You're Welcome!
          </Button>
        </DialogActions>
      </Dialog>
    }
    </div>


  );
}