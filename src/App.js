import './css/App.css';
import './css/reset.css';

import {useState, useEffect} from 'react'
import {Routes, Route, Link, useNavigate} from 'react-router-dom'

import SideComponent from './component/SideComponent';
import Home from './page/Home';
import About from './page/About'
import MySkill from './page/MySkill'
import Epilogue from './page/Epilogue'
import Portfolio from './page/Portfolio'


function App() {

  const navigate = useNavigate();

  /* 목차 정하는용 */
  const [index, setIndex] = useState(()=>JSON.parse(window.localStorage.getItem("index")) || 0);

  /* 목차useState 새로고침 저장 */
  useEffect(()=>{
    window.localStorage.setItem("index", JSON.stringify(index));

    /* index가 바뀌면 navigate로 Route찾아가라 */
    switch (index) {
      case 0:
        navigate("/")
        break;
      case 1:
        navigate("/About")
        break;
      case 2:
        navigate("/Skill")
        break;
      case 3:
        navigate("/Epilogue")
        break;
      case 4:
        navigate("/Portfolio")
        break;
    
      default:
        navigate("/");
        break;
    }
  },[index])
  
  return (
    <div className="App inner">
      <SideComponent index={index} setIndex={(index)=>{setIndex(index)}}></SideComponent>
      <Routes>
        <Route path='/' element={<Home setIndex={(index)=>{setIndex(index)}}></Home>}></Route>
        <Route path='/About' element={<About setIndex={(index)=>{setIndex(index)}}></About>}></Route>
        <Route path='/Skill' element={<MySkill setIndex={(index)=>{setIndex(index)}}></MySkill>}></Route>
        <Route path='/Epilogue' element={<Epilogue setIndex={(index)=>{setIndex(index)}}></Epilogue>}></Route>
        <Route path='/Portfolio' element={<Portfolio setIndex={(index)=>{setIndex(index)}}></Portfolio>}></Route>
      </Routes>
    </div>
  );
}

export default App;
