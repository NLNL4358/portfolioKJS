import React from 'react'
import "../css/MySkill.css"

import {useRef, useEffect} from 'react'

/* props 로 받은것 setIndex , scrollPageNavigate*/
const MySkill = (props) => {
  
  /* 스크롤 액션 */
  const MySkillRef = useRef();

  /* 핸들러 달아주기 */
  const wheelHandler = (e) =>{
    e.preventDefault();
    const { deltaY } = e;

    if(deltaY > 0 && props.scrollPageNavigate === "On"){
      /* 스크롤내릴때 */
      console.log("scroll Down");
      props.setIndex(3)
    }
    else if(deltaY < 0 && props.scrollPageNavigate === "On"){
      /* 스크롤올릴때 */
      console.log("scroll Up");
      props.setIndex(1);
    }
    
  }

  useEffect(()=>{
    const MySkillRefCurrent = MySkillRef.current;
    setTimeout(() => {
      
      MySkillRefCurrent.addEventListener("wheel", wheelHandler);
      return () => {
        
        MySkillRefCurrent.removeEventListener("wheel", wheelHandler);
      };
    },1000)
  },[])



  return (
    <div ref={MySkillRef} className='MySkill contents_inner'>
      <div className="pageNameSection">
        <h1 className='pageName'>My Skills</h1>
      </div>

      <div className="AllSkillsWrap">
        <div className="SkillCategoryWrap">
          <div className="SkillCategory WebFrontend">
            <h5 className='SkillCategoryName boldPretendard'>Web Frontend</h5>
            <div className="SkillWrap">
              <img src="/image/MySkill/HTML_logo.png" alt="" />
              <img src="/image/MySkill/CSS_logo.png" alt="" />
              <img src="/image/MySkill/javascript_logo.png" alt="" />
            </div>
          </div>
          <div className="SkillCategory Tool">
            <h5 className='SkillCategoryName boldPretendard'>Design Tool</h5>
            <div className="SkillWrap">
              <img src="/image/MySkill/clipStudio_logo.png" alt="" />
              <img src="/image/MySkill/photoshop_logo.png" alt="" />
              <img src="/image/MySkill/figma_logo.png" alt="" />
            </div>
          </div>
          <div className="SkillCategory Language">
            <h5 className='SkillCategoryName boldPretendard'>Language</h5>
            <div className="SkillWrap">
              <img src="/image/MySkill/CPlus_logo.png" alt="" />
              <img src="/image/MySkill/CSharp_logo.png" alt="" />
            </div>
          </div>
          <div className="SkillCategory Library">
            <h5 className='SkillCategoryName boldPretendard'>Library</h5>
            <div className="SkillWrap">
              <img src="/image/MySkill/jQuery_logo.png" alt="" />
              <img src="/image/MySkill/React_logo.png" alt="" />
            </div>
          </div>
          <div className="SkillCategory Communication">
            <h5 className='SkillCategoryName boldPretendard'>Communication</h5>
            <div className="SkillWrap">
              <img src="/image/MySkill/kakaotalk_logo.png" alt="" />
              <img src="/image/MySkill/Slack_logo.png" alt="" />
            </div>
          </div>
          <div className="SkillCategory VersionControl">
            <h5 className='SkillCategoryName boldPretendard'>Version Control</h5>
            <div className="SkillWrap">
              <img src="/image/MySkill/Git_logo.png" alt="" />
              <img src="/image/MySkill/git-hub_logo.png" alt="" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default MySkill