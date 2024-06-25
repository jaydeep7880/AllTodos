import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import NEWheader from './Simple fetch api todo ReactJs/NEWheader';
import OLDarray from './Old todo three props/OLDarray';
import Localhome from './Local storeg dummy data todo in ReactJs/Localhome';
import Localedit from './Local storeg dummy data todo in ReactJs/Localedit';
import Localadd from './Local storeg dummy data todo in ReactJs/Localadd';
import DHome from './Redux dummy data todo/DHome';
import DAdd from './Redux dummy data todo/DAdd';
import DView from './Redux dummy data todo/DView';
import DEdit from './Redux dummy data todo/DEdit';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showdata } from './Redux Fetch api todo/RUsereducer';
import RHome from './Redux Fetch api todo/RHome';
import RAdd from './Redux Fetch api todo/RAdd';
import RView from './Redux Fetch api todo/RView';
import REdited from './Redux Fetch api todo/REdited';

function App() {
  var showdispatch = useDispatch("")

  useEffect(() => {
    fetch("http://localhost:200/data")
      .then((res) => { return res.json() })
      .then((data) => {
        showdispatch(showdata(data))
      })
  }, [])
  return (
    <div className="App">

      {/* Simple fetch api todo ReactJs
      <BrowserRouter>
        <NEWheader></NEWheader>
      </BrowserRouter>
      Simple fetch api todo ReactJs */}

      {/* Old todo three props 
      <OLDarray></OLDarray>
      Old todo three props */}

      {/* Local storeg dummy data ReactJs
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Localhome></Localhome>}></Route>
          <Route path='/add' element={<Localadd></Localadd>}></Route>
          <Route path='/edit/:id' element={<Localedit></Localedit>}></Route>
        </Routes>
      </BrowserRouter>
      Local storeg dummy data ReactJs */}


      {/* Redux dummy data todo
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<DHome></DHome>}></Route>
            <Route path='/add' element={<DAdd></DAdd>}></Route>
            <Route path='/view/:id' element={<DView></DView>}></Route>
            <Route path='/edit/:id' element={<DEdit></DEdit>}></Route>
          </Routes>
        </BrowserRouter>
      Redux dummy data todo */}


      {/* Redux fetch api todo
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<RHome></RHome>}></Route>
            <Route path='/add' element={<RAdd></RAdd>}></Route>
            <Route path='/view/:id' element={<RView></RView>}></Route>
            <Route path='/edit/:id' element={<REdited></REdited>}></Route>
          </Routes>
        </BrowserRouter>
      Redux fetch api todo */}


    </div>
  );
}

export default App;
