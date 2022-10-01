import './App.css';
import * as React from 'react';
import OutputDisplay from './OutputDisplay';
import { CSSTransition } from "react-transition-group";

const SERVER_URL = process.env.REACT_APP_API_URI;

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: '',
  output: '',
fadeState: false};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }




  handleChange(event) {
    this.setState({value: event.target.value});
  }

  async handleSubmit(event) {
    this.setState({output: null})
    event.preventDefault();
    var bodyJSON = {url: this.state.value}
    console.log(this.state.value)
    const response = await fetch(`${SERVER_URL}/check`, {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyJSON)
       
    })
  
    const output = await response.json()
    console.log(typeof output.output)

    this.setState({output: output.output,
    fadeState: true})
    

   
  }

  render() {
    return (
        <div className='middle'>
          <h1 className='headerMain'>is the website safe or phishy?</h1>
          <h4 className = 'headerMain'>Paste the link of your desired product here to find out!</h4>
        <form onSubmit={this.handleSubmit} className='inputAndButton'>
            <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="  Enter URL" id="inputURL"/>
            <input type="submit" value="Go" className="submitButton"/>
        </form>
        {this.state.output!==null &&
      <CSSTransition
          in={this.state.fadeState}
          appear={true}
          timeout={1000}
          classNames="fade"
      >
        <OutputDisplay output={this.state.output} className="fade-in"/>
        </CSSTransition>
        }
        </div>
        

    );
  }
}

