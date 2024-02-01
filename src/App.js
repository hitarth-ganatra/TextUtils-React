import './App.css';
import {
  Navbar,
  TextInput,
  About,
  Tools,
  ActionMenu,
  Alert,
  Footer,
  Login
} from './components/index'
import  React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';

function App() {
  const [alert, setAlert] = useState(null);

  let showAlert = (message, type) => {
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
        <Route path='/' element={<TextInput newAlert={showAlert} />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login/:title' element={<Login newAlert={showAlert}/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
