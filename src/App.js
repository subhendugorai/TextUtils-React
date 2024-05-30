import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import { useState } from 'react';
import Alert from './Alert';
import About from './About';
/* import { BrowserRouter, Routes, Route } from "react-router-dom"; */




function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      });
      setTimeout(() => {
        setAlert(null);
      },1000);
  }
  
  const greenMode = () => {
    if(mode !== 'green') {
      setMode('green');
      document.body.style.backgroundColor = 'green';
      showAlert("Dark mode has been endabled", 'success');
    }else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been endabled", 'success');
    }
  }

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been endabled", 'success');
      document.title = 'TextUtils - Dark Mode';
      // setInterval(()=> {
      //   document.title = 'TextUtils - is Amazing'
      // },2000);
      // setInterval(()=> {
      //   document.title = 'TextUtils - Install Now'
      // },1500);
    }else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been endabled", 'success');
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
      <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode} greenMode = {greenMode}/>
      <Alert alert = {alert}/>
      <div className= "container my-3">
     {/*  <Routes>
          <Route
           path="/about"
          element = {<About />}
          />
          <Route
           path="/"
           element = { */}<TextForm alert = {showAlert} heading = "Enter the text to Enalyse" mode = {mode} setAlert = {setAlert}/>{/* }
          /> 
      </Routes> */}
      </div> 
    
    </>
  );
}
export default App;
