import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import CytoscapeComponent from 'react-cytoscapejs';
import { elements } from './GraphElements';
import { useRef } from "react";
import { cytoscapeStylesheet } from './GraphStyle';
import dagre from 'cytoscape-dagre';
import { layoutDagre } from './GraphStyle';
import cytoscape from 'cytoscape';
import './App.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa";
import AboutShopi from './AboutShopi';



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
          cytoRef.current.resize();

    }

    window.addEventListener('resize',function(event){
        cytoRef.current.center();
        cytoRef.current.resize();
    });
  }

  





  


  return (
    <div>
        <div className = "upperBar">
      <Button 
 
      onClick={handleClickOpen}
      color="inherit"
      style={{ fontFamily: 'Montserrat', color: "#FFFFFF" }}>
        How Does It Work?
      </Button>
      <a href="https://www.github.com/hadihammoud2000/shopiDetectv2" target="_blank">
      <FaGithub size={18} />
      </a>
      <a href="https://www.linkedin.com/in/hadi-h-aa4623114" target="_blank">
      <FaLinkedin size={18} />
      </a>
</div>
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
<AboutShopi/>
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
