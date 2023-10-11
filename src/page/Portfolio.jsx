import React from 'react'

import {useRef, useEffect} from 'react'

/* props로 가져온것 setIndex */
const Portfolio = (props) => {


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



  return (
    <div ref={PortfolioRef} className='Portfolio contents_inner'>Portfolio</div>
  )
}

export default Portfolio