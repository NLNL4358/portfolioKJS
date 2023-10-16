import React from 'react'
import '../css/About.css'

import { useRef , useEffect } from 'react';

/* props 로 받은것 setIndex, scrollPageNavigate */
const About = (props) => {


  /* 핸들러 달아주기 */
  const wheelHandler = (e) =>{
    e.preventDefault();
    const { deltaY } = e;
    
    if(deltaY > 0 && props.scrollPageNavigate === "On"){
      /* 스크롤내릴때 */
      console.log("scroll Down");
      props.setIndex(2)
    }
    else if(deltaY < 0 && props.scrollPageNavigate === "On"){
      /* 스크롤올릴때 */
      console.log("scroll Up");
      props.setIndex(0);
    }
  }
  /* 스크롤 액션 */
  const AboutRef = useRef();
  useEffect(()=>{
    const AboutRefCurrent = AboutRef.current;
    setTimeout(() => {
      AboutRefCurrent.addEventListener("wheel", wheelHandler);
      return () => {
        AboutRefCurrent.removeEventListener("wheel", wheelHandler);
      };
    },1000)
  },[])

 

  return (
    <div ref={AboutRef} className='About contents_inner'>
      <div className="pageNameSection">
        <h1 className='pageName'>About Me</h1>
      </div>

      <div className="AboutContentsWrap">
        <div className="AboutLeftWrap">
          <img className='AboutLeftImage' src="/image/About/aboutMeImage.png" alt="" />
        </div>
        <div className="AboutRightWrap">
          <div className="AboutGridWrap">
            <div className="AboutGridContents AboutName">
              <h5 className='AboutGridTextName boldPretendard'>이름
              <img className='AboutGridImage' src="/image/About/name.svg" alt="" />
              </h5>
              <p className='AboutGridTextBody'>강진수</p>
            </div>
            <div className="AboutGridContents AboutBirth">
              <h5 className='AboutGridTextName boldPretendard'>생년월일
              <img className='AboutGridImage' src="/image/About/birth.svg" alt="" />
              </h5>
              <p className='AboutGridTextBody'>96 . 03 . 27</p>
            </div>
            <div className="AboutGridContents AboutLocation">
              <h5 className='AboutGridTextName boldPretendard'>주소지
              <img className='AboutGridImage' src="/image/About/location.svg" alt="" />
              </h5>
              <p className='AboutGridTextBody'>대전 서구 변동</p>
            </div>
            <div className="AboutGridContents AboutTel">
              <h5 className='AboutGridTextName boldPretendard'>연락처
              <img className='AboutGridImage' src="/image/About/tel.svg" alt="" />
              </h5>
              <p className='AboutGridTextBody'>010 - 2263 - 4358</p>
            </div>
            <div className="AboutGridContents AboutEmail">
              <h5 className='AboutGridTextName boldPretendard'>이메일
              <img className='AboutGridImage' src="/image/About/email.svg" alt="" />
              </h5>
              <p className='AboutGridTextBody'>wide4514@gmail.com</p>
            </div>
            <div className="AboutGridContents AboutEducation">
              <h5 className='AboutGridTextName boldPretendard'>학력
              <img className='AboutGridImage' src="/image/About/education.svg" alt="" />
              </h5>
              <p className='AboutGridTextBody'>한밭대학교 - 컴퓨터공학</p>
            </div>
            <div className="AboutGridContents AboutCareer">
              <h5 className='AboutGridTextName boldPretendard'>경력 및 경험
              <img className='AboutGridImage' src="/image/About/career.svg" alt="" />
              </h5>
              <p className='AboutGridTextBody'>한국 과학 기술원 KAIST : 문화기술 연구소 - Visual Media Lab - 위촉연구원</p>
              <small>2022.04 ~ 2022.12  약 9개월</small>
              <p className='AboutGridTextBody'>에이치비 솔루션 (구 케이맥) - SE 개발자</p>
              <small>2020.12 ~  2022.01 약 1년 3개월</small>
              <p className='AboutGridTextBody'>국비교육 - Html, Css, JavaScript, 리액트 활용 프론트엔드 개발자 양성과정</p>
              <small>2023.04 ~ 2023.10 약 6개월 </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About