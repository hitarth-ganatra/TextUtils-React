import './App.css';
import Navbar from './components/Navbar';
import TextInput from './components/TextInput';
import React, { useState } from 'react';
import Alert from './components/alert';
import Footer from './components/footer';
import ActionMenu from './components/actionMenu';
import About from './components/About';
import {Route, Routes} from 'react-router-dom';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {  
      setAlert(null)
    }, 3000)
  }
  return (
    <>
      <Navbar />
      <Alert alert={alert}/>
      <ActionMenu />
      <Routes>
        <Route path='/' element={<TextInput showAlert={showAlert} />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
