import './App.css';
import * as React from 'react';
import no from "./assets/no.svg"
import yes from "./assets/yes.svg"



export default function OutputDisplay(props){

        const output = props.output
        if (output===0){
            return(
                <div className="fullOutput">
                    <div className='outputLogo'> 
                        <img src={yes}></img> 
                    </div>
      
                    <h1 id = "outputText">Shopi thinks it's safe! <br></br> <span style={{color: "#FFFFFF", fontSize: "20px"}}> Think he's mistaken? Correct him in the top right corner!</span></h1>
                    

                </div>
                );
            }
            else if (output===1){

            return(
                <div className="fullOutput">
                   <div className='outputLogo'> 
                       <img src={no}></img> 
                   </div>
                   <h1 id = "outputText">Shopi thinks it's phishy! <br></br>
                   <span style={{color: "#FFFFFF", fontSize: "20px"}}> Think he's mistaken? Correct him in the top right corner!</span> </h1></div>
               );

    }
}


    

