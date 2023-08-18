import Home from './Components/Home/Home'
import './App.scss'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Home/>
    </BrowserRouter>
    </>
  )
}

export default App
