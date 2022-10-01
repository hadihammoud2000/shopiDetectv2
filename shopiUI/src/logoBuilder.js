import logo from './assets/logo.png';
import './App.css';

function logoBuilder() {
  return (
    <div className="logo">
        <img src={logo}/>
    </div>
  );
}

export default logoBuilder;
