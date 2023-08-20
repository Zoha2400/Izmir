import {useEffect, useState} from 'react'
import Home from './Components/Home/Home'
import './App.scss'

import { BrowserRouter } from "react-router-dom";
import LogIn from './LogIn';

function App() {

  const [loging, setLoging] = useState(false);

 
  return (
    <>
    <BrowserRouter>
      {loging ? <Home/> :  <LogIn/>}

    </BrowserRouter>
    </>
  )
}

export default App
