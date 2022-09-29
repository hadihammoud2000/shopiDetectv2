import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import CytoscapeComponent from 'react-cytoscapejs';
import Graph from './Graph';
import { elements } from './GraphElements';
import { useRef } from "react";
import { cytoscapeStylesheet } from './GraphStyle';
import dagre from 'cytoscape-dagre';
import { layoutDagre } from './GraphStyle';
import cytoscape from 'cytoscape';
import { useEffect } from "react";
import './App.css';



cytoscape.use(dagre);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} timeout = {{ "enter": 500, "exit": 1000 }} />;
});

    

export default function FullScreenDialog() {
    const cytoRef = useRef(null);
 
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);

  };

  const handleClose = () => {
    setOpen(false);
  };

//   const animateGraph = () => {


//   }



  function animateGraph(){
    if (cytoRef.current){

        var Animate = function (evt) {
            var targetNode = cytoRef.current.nodes("[id = '" + evt.target.id() + "']");
            console.log("[id = '" + evt.target.id() + "']");
            cytoRef.current.animate({
              fit: {
                eles: targetNode,
                padding: 20
              }
            },
              {
                duration: 350
              });
          }
          cytoRef.current.on('click', 'node', Animate);
    }

    window.addEventListener('resize',function(event){
        cytoRef.current.center();
    });
  }

  





  


  return (
    <div>
      <Button 
 
      onClick={handleClickOpen}
      color="inherit"
      style={{ fontFamily: 'Montserrat' }}>
        How Does It Work?
      </Button>
      {open===true &&
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        PaperProps={{
            style: {
              backgroundColor: 'transparent',
              boxShadow: 'none',
            },
          }}
      >
        
          <Toolbar
          style={{ background: '#FFFFFF' }}>
            <IconButton
              edge="start"
              style={{ color: '#000000' }}

              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>

            
          </Toolbar>


<div className='Divider'>
<div  className='aboutText'> 
    <h1>Welcome to ShopiDetect!</h1>
    <div className="aboutTextDetails">
    ShopiDetect is a tool to help detect whether a website is safe or phishy. It is a personal project of mine.
    It is mostly targeted towards e-commerce websites. <br></br> <br></br> All you have to do is 
    input the URL of the item(preferrably) or e-shop that you plan on buying from.
    Behind the scenes, a machine learning model, trained using multiple <b>features (check the graph on the right)
    </b>, analyzes your target URL and gives you a yes/no output. Simple as that! 

     <br></br> <br></br>
     the model is trained using a dataset which contains 991,638 safe websites and 56,937 fishy websites.<br></br> <u>Support for reinforcement learning is now live! Tell us whether we were right or wrong, ShopiDetect is ready to learn!</u>


    <h4>Test Accuracy Results: </h4>    
    <h5>Logistic Regression Classification: <span style={{color: "#FF0000", fontWeight:"bold", fontSize: "25px"}}>0.96103</span> </h5>
    <h5><mark>Support Vector Machines Classification: <span style={{color: "#FF0000", fontWeight:"bold", fontSize: "25px"}}>0.98270</span></mark></h5>
    <h5>Gaussian Naive Bayes Classification: <span style={{color: "#FF0000", fontWeight:"bold", fontSize: "25px"}}>0.93073</span> </h5>
     <span style={{color: "#FF0000"}}><i>Please Keep in mind: the results are based on a machine learning model, which means that they are a prediction
     and may not be a 100% accurate.</i> </span> 
    </div>

</div>
<CytoscapeComponent elements={elements} stylesheet={cytoscapeStylesheet}   
cy={ref => {
    cytoRef.current = ref;
     animateGraph()}
     } minZoom={0.5} maxZoom={1.5} autoungrabify={true} userPanningEnabled={true} layout={layoutDagre} className="cytoGraph"/>

</div>

        
      </Dialog>}


    </div>
  );
}
