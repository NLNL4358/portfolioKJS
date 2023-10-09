import './css/App.css';
import './css/reset.css';

import {useState, useEffect} from 'react'
import {Routes, Route, Link} from 'react-router-dom'

import SideComponent from './component/SideComponent';
import Home from './page/Home';
import About from './page/About'
import MySkill from './page/MySkill'
import Epilogue from './page/Epilogue'
import Portfolio from './page/Portfolio'


function App() {
  const [index, setIndex] = useState();


  return (
    <div className="App inner">
      <SideComponent index={index} setIndex={(index)=>{setIndex(index)}}></SideComponent>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/MySkill' element={<MySkill></MySkill>}></Route>
        <Route path='/Epilogue' element={<Epilogue></Epilogue>}></Route>
        <Route path='/Portfolio' element={<Portfolio></Portfolio>}></Route>
      </Routes>
    </div>
  );
}

export default App;
