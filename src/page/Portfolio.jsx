import React from 'react'

import {useRef, useEffect, useState} from 'react'
import "../css/Portfolio.css"
/* props로 가져온것 setIndex  , portfolioImageArray */
const Portfolio = (props) => {

  /* 포트폴리오를 넘기기위한 useState가 필요하다 */
  const [portfolioPageNumber, setPortfolioPageNumber] = useState(0);

  const PortfolioRef = useRef();
  useEffect(()=>{
    const PortfolioRefCurrent = PortfolioRef.current;
    setTimeout(() => {
      /* 핸들러 달아주기 */
      const wheelHandler = (e) =>{
        e.preventDefault();
        const { deltaY } = e;

        if(deltaY < 0){
          /* 스크롤올릴때 */
          console.log("scroll Up");
          props.setIndex(3);
        }
        
      }
      PortfolioRefCurrent.addEventListener("wheel", wheelHandler);
      return () => {
        PortfolioRefCurrent.removeEventListener("wheel", wheelHandler);
      };
    },1000)
  },[])
  

  /* 프로젝트 내용들의 배열 */
  const projectName = [
    "사이퍼즈",
    "에버랜드",
    "제주항공",
    "대전사이버도서관"
  ]

  return (
    <div ref={PortfolioRef} className='Portfolio contents_inner'>
      <div className="pageNameSection">
        <h1 className='pageName'>Portfolios</h1>
      </div>

      <div className="PortfolioContentsWrap">
        <div className="PortfolioLeftMonitorSection">
          <img className='PortFolioMonitorImage' src="/image/Portfolio/macbookImage.png" alt="" />
          <div className="PortfolioPageImageWrap"> {/* 보이는곳 */}
            <div className="PortfolioPageImageSlider"> {/* 움직이는곳 */}
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
                <div className={`PortfolioProjectWrap ${portfolioPageNumber === index ? "target" : ""} ${index}`}>
                  <h2 className='PortfolioProjectName Jamsil'>{item}</h2>
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