import React from 'react'
import { useCallback } from 'react';

import {useRef, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import "../css/Portfolio.css"
/* props로 가져온것 setIndex  , portfolioImageArray */
const Portfolio = (props) => {

  /* 포트폴리오를 넘기기위한 useState가 필요하다 */
  const [portfolioPageNumber, setPortfolioPageNumber] = useState(0);

  /* portfolio page Ref */
  const PortfolioRef = useRef();

  /* portfolio page 의 스크롤 이벤트를 위한 핸들러 선언 , useCallback으로 다른 곳에서도 재사용이 가능하도록!! */
  const wheelHandler = useCallback((e) =>{
    e.preventDefault();
    const { deltaY } = e;
    if(deltaY < 0){
      /* 스크롤올릴때 */
      console.log("scroll Up");
      props.setIndex(3);
    }
  },[])

  useEffect(()=>{
    const PortfolioRefCurrent = PortfolioRef.current;
    setTimeout(() => {  
      /* portfolio page에 핸들러 달아주기 */
      PortfolioRefCurrent.addEventListener("wheel", wheelHandler);
      return () => {
        PortfolioRefCurrent.removeEventListener("wheel", wheelHandler);
      };
    },0) /* 맨마지막 페이지니까 .. 바로 되도될듯*/ 
  },[])
  
  /* imageWrap에 마우스가 들어오거나 나갈때 변경될 useState */
  const [imageWrapHover, setImageWrapHover] = useState(false);

  /* imageWrap에 mouseOver 나 mouseOut이 일어난다면!! */
  useEffect(()=>{
    if(imageWrapHover){
      /* hover 중일때는 portfolio page의 wheel 이벤트 핸들러 제거! */
      PortfolioRef.current.removeEventListener("wheel", wheelHandler);
    }
    else{
      /* hover 끝나면 portfolio page의 wheel 이벤트 핸들러 다시 장착 */
      PortfolioRef.current.addEventListener("wheel", wheelHandler);
    }
  },[imageWrapHover])
  
  /* 프로젝트 내용들의 배열 */
  const projectName = [
    "사이퍼즈",
    "에버랜드",
    "제주항공",
    "대전사이버도서관"
  ]

  const projectExplanation = [
    /* 문자열에 들여쓰기를 하고싶다면 \n 을 사용하고 css속성에 white-space : pre-wrap 속성추가 */
    `온라인게임 '사이퍼즈'의 페이지를 리뉴얼한 페이지입니다. \n'게임'이라는 주제와 Api를 활용하여 전적검색이 가능한 페이지를\n제작하는 것을 목적으로 만들게 되었습니다.`
  ]

  const projectFunction = [
    `리액트의 Route를 이용하여 재랜더링 방식으로 페이지간 전환을\n구현하였고 컴포넌트 사용을 적극 활용했으며 API를 활용하여 캐릭터 닉네임을\n입력하면 전적 검색이 가능하도록 기능을 구현했습니다.`
  ]

  const projectTech = [
    `React , REST API , AOS Library , CSS , Swiper`
  ]

  const projectPeriod = [
    "2023.09.05 ~ 2023.10.04"
  ]

  const projectNumberOfPeople = [
    "개인 프로젝트 - 본인 1명"
  ]


  const goToSiteUrl =[
    "https://cyphers.netlify.app/#/"
  ]

  const gotoGitHubUrl = [
    "https://github.com/NLNL4358/cyphers"
  ]

  return (
    <div ref={PortfolioRef} className='Portfolio contents_inner'>
      <div className="pageNameSection">
        <h1 className='pageName'>Portfolios</h1>
      </div>

      <div className="PortfolioContentsWrap">
        <div className="PortfolioLeftMonitorSection">
          <img className='PortFolioMonitorImage' src="/image/Portfolio/macbookImage.png" alt="" />
          {/* imageWrap의 ref를 사용하여 호버시 스크롤로 페이지이동 막기위함 */}
          {/* mouse over, out 이벤트로 useState를 변경!! onMouseEnter */}
          <div onMouseEnter={()=>{setImageWrapHover(true)}} onMouseLeave={()=>{setImageWrapHover(false)}} className="PortfolioPageImageWrap"> {/* 보이는곳 */}
            <div className={`PortfolioPageImageSlider ${portfolioPageNumber}`}> {/* 움직이는곳 */}
              {
                props.portfolioImageArray && props.portfolioImageArray.map((item, index)=>(
                  <img className={`PortfolioPageImage ${index} ${portfolioPageNumber === index ? "target" : ""}`} src={item}></img>
                  )
                )
              }
            </div>
          </div>
        </div>
        <div className="PortfolioRightTextSection">
          <div className="PortfolioProjectTextWrap">
            
            {
              projectName.map((item,index)=>(
                <div key={index} className={`PortfolioProjectWrap ${portfolioPageNumber === index ? "target" : ""} ${index}`}>
                  <h2 className='PortfolioProjectName Jamsil'>{item}</h2>
                  <p className='PortfolioProjectExplanation'>{projectExplanation[index]}</p>

                  <div className="portfolioFunctionTextWrap">
                    <span className='portfolioFunctionName'>주요 기능</span>
                    <span className='portfolioFunctionText'>{projectFunction[index]}</span>
                  </div>
                  <div className="portfolioTechTextWrap">
                    <span className='portfolioTechName'>Tech</span>
                    <span className='portfolioTechText'>{projectTech[index]}</span>
                  </div>
                  <div className="portfolioPeriodWrap">
                    <span className='portfolioPeriodName'>개발 기간</span>
                    <span className='portfolioPeriodText'>{projectPeriod[index]}</span>
                  </div>
                  <div className="portfolioNumberOfPeopleWrap">
                    <span className='portfolioNumberOfPeopleName'>개발 인원</span>
                    <span className='portfolioNumberOfPeopleText'>{projectNumberOfPeople[index]}</span>
                  </div>

                  <div className="portfolioButtonWrap">
                    <div className="goToSiteButton">
                      {/* 경고메세지 없애기용 rel="noopener noreferrer" */}
                      <Link target="_blank" rel="noopener noreferrer" to={goToSiteUrl[index]}>
                        사이트 바로가기
                      </Link>
                    </div>
                    <div className="goToGitHubButton">
                      <Link target="_blank" rel="noopener noreferrer" to={gotoGitHubUrl[index]}>
                        <img src="/image/Portfolio/GitHubIcon.png" alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio