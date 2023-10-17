import './css/App.css';
import './css/reset.css';
import './css/relative.css';

import {useState, useEffect, useLayoutEffect} from 'react'
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
        navigate("/Epilogue")
        // navigate("/About")
        break;
      case 2:
        navigate("/Portfolio")
        // navigate("/Skill")
        break;
      case 3:
        navigate("/Skill")
        // navigate("/Epilogue")
        break;
      case 4:
        navigate("/About")
        // navigate("/Portfolio")
        break;
    
      default:
        navigate("/");
        break;
    }
  },[index])
  

  /* portfolio용 이미지를 미리 로드하자!! */
  /* 이거... gif로 하면 너무 크다.. 그냥 이미지로하자  */
  const portfolioImageArray = [ /* src */
    "/image/Portfolio/cyphers.png",
    "/image/Portfolio/everland.png",
    "/image/Portfolio/jejuair.png",
    "image/Portfolio/daejeonCyberLibrary.png"
  ]

  const images = new Array();
  /* useLayoutEffect는 마운트 되기전에 가져오기때문에 useEffect보다 빠름 */
  useLayoutEffect(()=>{
    for( let i = 0 ; i < portfolioImageArray.length ; i++){
      images[i] = new Image();
      images[i].src = portfolioImageArray[i];  /* 이미지 미리 로딩 이러면 캐시에 존재해서 빠르게 로드될...껄?*/
    }
  },[])

  /* 스크롤로 페이지를 이동할 것인가? 말것인가 정하는 useState */
  const [scrollPageNavigate, setScrollPageNavigate] = useState("On");

  return (
    <div className="App inner">
      <SideComponent index={index} setIndex={(index)=>{setIndex(index)}}></SideComponent>
      <Routes>
        <Route path='/' element={<Home setIndex={(index)=>{setIndex(index)}}></Home>}></Route>
        <Route path='/About' element={<About setIndex={(index)=>{setIndex(index)}}></About>}></Route>
        <Route path='/Skill' element={<MySkill setIndex={(index)=>{setIndex(index)}}></MySkill>}></Route>
        <Route path='/Epilogue' element={<Epilogue setIndex={(index)=>{setIndex(index)}}></Epilogue>}></Route>
        <Route path='/Portfolio' element={<Portfolio portfolioImageArray={portfolioImageArray} setIndex={(index)=>{setIndex(index)}}></Portfolio>}></Route>
      </Routes>
    </div>
  );
}

export default App;
