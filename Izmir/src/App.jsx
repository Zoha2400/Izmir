import {useEffect, useState} from 'react'
import Home from './Components/Home/Home'
import './App.scss'

import { BrowserRouter } from "react-router-dom";
import LogIn from './LogIn';

function App() {

  const [loging, setLoging] = useState(true);

 
  return (
    <>
    <BrowserRouter>
      {loging ? <Home/> :  <LogIn loging={loging} setLoging={setLoging}/>}
    </BrowserRouter>
    </>
  )
}

export default App
