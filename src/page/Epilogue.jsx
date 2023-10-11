import React from 'react'

import "../css/Epilogue.css"

import {useRef, useEffect} from 'react'

/* props로 전달받은것 setIndex */
const Epilogue = (props) => {

  const EpilogueRef = useRef();
  useEffect(()=>{
    const EpilogueRefCurrent = EpilogueRef.current;
    setTimeout(() => {
      /* 핸들러 달아주기 */
      const wheelHandler = (e) =>{
        e.preventDefault();
        const { deltaY } = e;

        if(deltaY > 0){
          /* 스크롤내릴때 */
          console.log("scroll Down");
          props.setIndex(4)
        }
        else{
          /* 스크롤올릴때 */
          console.log("scroll Up");
          props.setIndex(2);
        }
        
      }
      EpilogueRefCurrent.addEventListener("wheel", wheelHandler);
      return () => {
        EpilogueRefCurrent.removeEventListener("wheel", wheelHandler);
      };
    },1000)
  },[])

  return (
    <div ref={EpilogueRef} className='Epilogue contents_inner'>
      <div className="pageNameSection">
        <h1 className='pageName'>Epilogue</h1>
      </div>
      <div className="EpilogueContentsWrap">
        <div className="EpilogueTopDOM">
          <h4 className='Jamsil'>{"<"}</h4>
          <h4 className='EpilogueCrimeColor Jamsil'>div</h4>
          <h4 className='EpilogueGreenColor Jamsil'>className</h4>
          <h4 className='Jamsil'>=</h4>
          <h4 className='EpilogueYellowColor Jamsil'>{`"MyKeyWord"`}</h4>
          <h4 className='Jamsil'>{">"}</h4>
        </div>

        <div className="EpilogueTextWrap">
          <div className="EpilogueRows EpilogueTextFirstRow">
            <p className='size120 Jamsil'>{`"`}</p>
            <p className='size100 Jamsil'>책임감있는 개발자</p>
            <div className="EpilogueWrapInRow">
              <p className='size30 Jamsil'>디버깅</p>
              <p className='size50 Jamsil'>유지보수</p>
            </div>
          </div>
        </div>

        <div className="EpilogueBottomDOM">
          <h4 className='Jamsil'>{"</"}</h4>
          <h4 className='EpilogueCrimeColor Jamsil'>div</h4>
          <h4 className='Jamsil'>{">"}</h4>
        </div>
      </div>
    </div>
  ) 
}

export default Epilogue