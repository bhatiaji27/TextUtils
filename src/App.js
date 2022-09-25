import './App.css';
 import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import PropTypes from 'prop-types';
import react, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

const [mode,setMode] = useState('light');
const [alert,setAlert]=useState(null);

const showAlert = (message,type)=>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(()=>{
     setAlert(null);
  },1500)
}

const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#22577E';
    showAlert("Dark mode has been enabled", "Success");
  }
  else {
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled", "Success");
  }
}

  return (
    <>

<Router>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert} />
  <div className="container my-3">
      <Routes>
            <Route exact path="/about" element={<About mode={mode} />}>
            </Route>

            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter text here to analyse" mode={mode} />}>
            </Route>
      </Routes>
  </div>
</Router>
  </>
  );
}

export default App;
