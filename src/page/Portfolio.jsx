import React from 'react'
import { useCallback } from 'react';

import {useRef, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import "../css/Portfolio.css"
/* props로 가져온것 setIndex  , portfolioImageArray , scrollPageNavigate */
const Portfolio = (props) => {


  /* 포트폴리오를 넘기기위한 useState가 필요하다 */
  const [portfolioPageNumber, setPortfolioPageNumber] = useState(0);

  /* portfolio page Ref */
  const PortfolioRef = useRef();

  /* portfolio page 의 스크롤 이벤트를 위한 핸들러 선언 , useCallback으로 다른 곳에서도 재사용이 가능하도록!! */
  const wheelHandler = useCallback((e) =>{

    e.preventDefault();
    const { deltaY } = e;
    if(deltaY < 0 && props.scrollPageNavigate === "On"){
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
  


  const PortfolioPageImageWrap = useRef();

  const changePageNumber = (func) => {
    const currentPageNumber = portfolioPageNumber;
    PortfolioPageImageWrap.current.scrollTo({top:0,left:0, behavior:'auto'});
    if(func === "plus" && !(portfolioPageNumber === 3)){
      setPortfolioPageNumber(currentPageNumber+1);
    }
    else if(func === "minus" && !(portfolioPageNumber === 0)){ /* minus */
      setPortfolioPageNumber(currentPageNumber-1)
    }
  }

  /* 프로젝트 내용들의 배열 */
  const projectName = [
    "사이퍼즈",
    "에버랜드",
    "제주항공",
    "대전사이버도서관"
  ]

  const projectExplanation = [
    /* 문자열에 들여쓰기를 하고싶다면 <br/> 을 사용하고 css속성에 white-space : pre-wrap 속성추가 */
    <p className='PortfolioProjectExplanation'>온라인게임 ' <point3>사이퍼즈</point3> '의 페이지를 리뉴얼한 프로젝트입니다. <br/>' <point3>게임</point3> '이라는 주제와 <point4>Rest Api</point4>를 활용하여 <point4>전적검색</point4>이 가능한 페이지를<br/>제작하는 것을 목적으로 만들게 되었습니다.</p>,

    <p className='PortfolioProjectExplanation'>테마파크 ' <point3>에버랜드</point3> '의 페이지를 리뉴얼한 프로젝트입니다. <br/><point3>위치, 날씨 Api</point3>를 활용한 페이지를 만드는 것을 목적으로 하였습니다.<br/><point4>팀원 개별로 각 섹션별</point4> 디자인과 개발을 한 후 <point4>깃허브</point4>를 이용해 코드를 합치는 방식으로 완성하였습니다.</p>,

    <p className='PortfolioProjectExplanation'>항공사 ' <point3>제주항공</point3> '의 페이지를 리뉴얼한 프로젝트입니다. <br/>원본 제주항공 페이지의 메인 페이지의 개선점인 적은 콘텐츠를 개선하여<br/><point4>메인 페이지 활용성</point4>을 높이는 목적으로 만들게 되었습니다.</p>,

    <p className='PortfolioProjectExplanation'>대전의 '<point3>대전 사이버 도서관</point3>' 페이지를 리뉴얼한 팀 프로젝트입니다.<br/>중복된 메뉴, 중요도를 고려하지않은 배치 등 <point3>문제점을 개선</point3>하고<br/><point4>반응형 웹</point4>으로 제작하는 목적으로 만들게 되었습니다.</p>
  ]

  const projectFunction = [
    <span className='portfolioFunctionText'>`리액트의 <point3>Route</point3>를 이용하여 <point3>재랜더링</point3> 방식으로 페이지간 전환을<br/>구현하였고 컴포넌트 사용을 적극 활용했으며 <point4>네오플API</point4>를 활용하여 캐릭터 닉네임을<br/>입력하면 <point4>전적 검색</point4>이 가능하도록 기능을 구현했습니다.`</span>,
    
    <span className='portfolioFunctionText'>`<point3>위치 Api</point3>를 이용하여 <point3>에버랜드의 지도</point3>를 모달창으로 구현하였고,<br/><point4>날씨 Api</point4>또한 사용하며 <point4>에버랜드 주변의 날씨</point4>를 확인 할 수 있습니다.`</span>,

    <span className='portfolioFunctionText'>`Javascript의 라이브러리인 <point3>JQuery</point3>를 사용하여 예약에 필요한<br/><point3>캘린더를 구현</point3>하였고 <point4>Parallax Scroll</point4> 스타일을 사용하여 <point4>입체감</point4>을 주었습니다.<br/>또한 <point3>반응형 웹</point3>으로 구현하여 모바일 사이즈 경우 앱의 스타일을 살린 배치와<br/><point3>하단 Nav</point3>를 사용할 수 있도록 구현하였습니다.`</span>,

    <span className='portfolioFunctionText'>`CSS를 이용한 DOM의 <point3>애니메이션과 반응형 웹</point3>을 구현하였고<br/>모바일 사이즈 경우 <point4>햄버거 버튼을 클릭해 반응형 메뉴</point4>가 나타나도록 배치하고<br/><point3>서브페이지</point3> 또한 제작하여 메인 페이지와 연결되도록 하였습니다.`</span>
  ]

  const projectHavePage = [
    "메인페이지 , 서브페이지 4 ( 세계관, 캐릭터 이클립스, 전적검색(preface), 전적검색(record)",
    "메인페이지 , 서브페이지 3 ( 이용요금, 에버랜드 스토리, 추천 코스 )",
    "메인페이지 1",
    "메인페이지 , 서브페이지 3 ( 로그인, 회원가입, 공지사항 )"
  ]

  const projectTech = [
    <span className='portfolioTechText'>`React , REST API , AOS Library , CSS , Swiper`</span>,
    <span className='portfolioTechText'>`HTML, CSS, Javascript, Swiper`</span>,
    <span className='portfolioTechText'>`HTML, CSS, Javascript, JQuery, Swiper, AOS`</span>,
    <span className='portfolioTechText'>`HTML, CSS, Javascript, Swiper`</span>
  ]

  const projectPeriod = [
    "2023.09.05 ~ 2023.10.04",
    "2023.08.01 ~ 2023.09.05",
    "2023.06.20 ~ 2023.07.28",
    "2023.05.01 ~ 2023.06.16" 
  ]

  const projectNumberOfPeople = [
    "개인 프로젝트 - 본인 1명",
    "팀 프로젝트 - 3명",
    "개인 프로젝트 - 본인 1명",
    "팀 프로젝트 - 3명"
  ]


  const goToSiteUrl =[
    "https://cyphers.netlify.app/#/",
    "https://everland-renewal.netlify.app/",
    "https://nlnl4358.github.io/jejuair/",
    "https://nlnl4358.github.io/daejeoncyberlibrary/"
  ]

  const gotoGitHubUrl = [
    "https://github.com/NLNL4358/cyphers",
    "https://github.com/NLNL4358/everland.gihub.io",
    "https://github.com/NLNL4358/jejuair",
    "https://github.com/NLNL4358/daejeoncyberlibrary"
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
          <div ref={PortfolioPageImageWrap} onMouseEnter={()=>{setImageWrapHover(true)}} onMouseLeave={()=>{setImageWrapHover(false)}} className="PortfolioPageImageWrap"> {/* 보이는곳 */}
            <div className={`PortfolioPageImageSlider page${portfolioPageNumber}`}> {/* 움직이는곳 */}
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
                  {projectExplanation[index]}
                  <div className="portfolioHavePageWrap">
                    <span className='portfolioHavePageName'>결과물</span>
                    <span className="portfolioHavePageText">{projectHavePage[index]}</span>
                  </div>
                  <div className="portfolioFunctionTextWrap">
                    <span className='portfolioFunctionName'>주요 기능</span>
                    {projectFunction[index]}
                  </div>
                  <div className="portfolioTechTextWrap">
                    <span className='portfolioTechName'>Tech</span>
                    {projectTech[index]}
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
                        Git Hub
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            }

            <div className="pageButtonWrap">
              <div onClick={()=>(changePageNumber("minus"))} className={`prevButton page${portfolioPageNumber}`}>
                <img src="/image/Portfolio/prevArrow.png" alt="" />
                <span className='prevButtonText'>Prev</span>
              </div>
              <div onClick={()=>(changePageNumber("plus"))} className={`nextButton page${portfolioPageNumber}`}>
                <span className='nextButtonText'>Next</span>
                <img src="/image/Portfolio/nextArrow.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio