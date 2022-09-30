import './App.css';
import * as React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className='bgimg'>
        <div className='middle'>
          <h1 className='headerMain'>is the website safe or phishy?</h1>
          <h4 className = 'headerMain'>Paste the link of your desired product here to find out!</h4>
        <form onSubmit={this.handleSubmit} className='inputAndButton'>
            <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="  Enter URL" id="inputURL"/>
            <input type="submit" value="Go" className="submitButton"/>
        </form>
        </div>
      </div>
    );
  }
}

