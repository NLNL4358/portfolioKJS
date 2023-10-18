import React from 'react'

import "../css/Epilogue.css"

import {useRef, useEffect} from 'react'

/* props로 전달받은것 setIndex , scrollPageNavigate*/
const Epilogue = (props) => {

  const EpilogueRef = useRef();

  /* 핸들러 달아주기 */
  const wheelHandler = (e) =>{
    e.preventDefault();
    const { deltaY } = e;

    if(deltaY > 0 ){
      /* 스크롤내릴때 */
      console.log("scroll Down");
      props.setIndex(4)
    }
    else if(deltaY < 0){
      /* 스크롤올릴때 */
      console.log("scroll Up");
      props.setIndex(2);
    }
    
  }
  
  useEffect(()=>{
    // const EpilogueRefCurrent = EpilogueRef.current;
    // setTimeout(() => {
      
    //   EpilogueRefCurrent.addEventListener("wheel", wheelHandler);
    //   return () => {
    //     EpilogueRefCurrent.removeEventListener("wheel", wheelHandler);
    //   };
    // },1000)
  },[])

  const goToPortfolio = () =>{
    props.setIndex(2);
  }

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
          <div className="EpilogueTopDot"></div>
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
          <div className="EpilogueRows EpilogueTextSecondRow">
            <div className="EpilogueWrapInRow">
              <p className='size30 Jamsil'>눈이 즐거운 웹</p>
              <p className='size50 Jamsil'>사용자 배려 디자인</p>
            </div>
            <p className='size80 Jamsil'>트렌디한 디자인</p>
          </div>
          <div className="EpilogueRows EpilogueTextThirdRow">
            <p className='size100 Jamsil'>성장하는 개발자</p>
            <div className="EpilogueWrapInRow">
              <p className='size30 Jamsil'>더 높은 완성도를 목표로</p>
              <p className='size50 Jamsil'>피드백 환영</p>
            </div>
          </div>
          <div className="EpilogueRows EpilogueTextForthRow">
            <div className="EpilogueWrapInRow">
              <p className='size50 Jamsil'>겸손한 신입의 자세</p>
              <p className='size60 Jamsil'>성장의 기회</p>
            </div>
            <p className='size100 Jamsil'>오픈 마인드</p>
          </div>
          <div onClick={()=>{goToPortfolio()}} className="goToPortfolio EpilogueRows EpilogueTextFifthRow">
            <p className=' size100 Jamsil'>포트폴리오</p>
            <p className=' size120 Jamsil'>{`"`}</p>
            <img className='goToPortfolioCursorEffect' src="/image/Epilogue/mousePointerEffect.png" alt="" />
            <img className='goToPortfolioCursor' src="/image/Epilogue/mousePointer.png" alt="" />
            <h3 className='goToPortfolioText Jamsil'>Click Here!</h3>
          </div>
        </div>

        <div className="EpilogueBottomDOM">
          <h4 className='Jamsil'>{"</"}</h4>
          <h4 className='EpilogueCrimeColor Jamsil'>div</h4>
          <h4 className='Jamsil'>{">"}</h4>
          <div className="EpilogueBottomDot"></div>
        </div>
      </div>
    </div>
  ) 
}

export default Epilogue