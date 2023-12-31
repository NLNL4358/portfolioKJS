import React from 'react'
import '../css/SideComponent.css'

import {Link, useNavigate} from 'react-router-dom'

/* props로 받은 것 -  index , setIndex ,ScrollPageNavigate ,setScrollPageNavigate*/
const SideComponent = (props) => {
  const navigate = useNavigate();
  const indexArray = [
    "Home",
    "About",
    "Skill",
    "Identity",
    "Portfolio",
  ]

  const changeIndex = (event,index) =>{
    /* index 만 매개변수로 사용하면 index를 event로 삼아서 가져오기때문에 앞에 event또한 가져오고
    preventDefault를 해주어야한다. */
    event.preventDefault();
    props.setIndex(index);

    index === 0 ? navigate('/') : navigate(`/${indexArray[index]}`);
  } 


  const changeScrollPageButton = () => {
    if(props.scrollPageNavigate === "On"){
      props.setScrollPageNavigate("Off");
    }
    else{
      props.setScrollPageNavigate("On");
    }
  }
  return (
    <div className='SideComponent'>
      <div className="sideComponentImageWrap">
        <img className='sideComponentImage' src="/image/SideComponent/sideComponentImage.png" alt="" />
      </div>
      <div className="sideComponentNameWrap">
        <h1 className='sideComponentBackgroundName Lobster'>Kang Jin Soo</h1>
        <h3 className='sideComponentName Bebas'>KANG JIN-SOO</h3>
      </div>

      <div className="sideComponentIndexWrap">
        {
          indexArray.map((item, index)=>(
            <div key={index} onClick={(event)=>(changeIndex(event,index))} className={`sideComponentIndex ${props.index === index ? "target" : ""} boldPretendard`}>
              {item}
            </div>
          ))
        }
      </div>
      <div className="sideComponentScrollPageButtonWrap">
        {
          props.scrollPageNavigate === undefined ? null : (
            <div onClick={changeScrollPageButton} className={`scrollPageButton ${props.scrollPageNavigate}`}>
              <div className={`scrollPageButtonCircle ${props.scrollPageNavigate}`}></div>
            </div>
          )
        }
      </div>
      <div className="sideComponentBottomWrap">
        <div className="gitHubLogoWrap">
          <Link className='gitHubLogoLink' to='https://github.com/NLNL4358' target="_blank"> 
            <img className='gitHubLogoImage' src="/image/SideComponent/GithubLogo.png" alt="" />
          </Link>
        </div>

        <small className='sideComponentTelNumber'>Tel : 010 - 2263 - 4358</small>
        <small className='sideComponentEmail'>email : wide4514@gmail.com</small>
      </div>
    </div>
  )
}

export default SideComponent