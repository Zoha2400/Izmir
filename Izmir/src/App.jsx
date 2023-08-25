import {useEffect, useState} from 'react'
import Home from './Components/Home/Home'
import './App.scss'

import { useDispatch, useSelector } from 'react-redux';

import { BrowserRouter } from "react-router-dom";
import LogIn from './LogIn';

import { fetchData } from './store/dataFetchSlice';

function App() {

  // const dispatch = useDispatch();
  // const data = useSelector(state => state.dataFetch.data)

  // useEffect(() => {
  //   dispatch(fetchData());
  // }, [dispatch]);

  // useEffect(() => {
  //   // Когда данные обновляются, выведем их в консоль
  //   console.log(data);
  // }, [data]);


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
